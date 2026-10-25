// Mode Cero homepage: click-to-load gameplay video and optional file links.

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Header logo: rests on the animation's own first frame, glitches once on load
  // and again on hover or focus. Each play gets a fresh blob URL so it restarts
  // from frame one without refetching the file.
  document.querySelectorAll("img[data-logo-burst]").forEach(function (logo) {
    if (reduceMotion || !window.fetch || !window.URL || !URL.createObjectURL) return;
    var still = logo.getAttribute("src");
    var duration = parseInt(logo.getAttribute("data-logo-burst-ms"), 10) || 600;
    var trigger = logo.closest("a") || logo;
    var blob = null;
    var playing = false;
    var play = function () {
      if (!blob || playing) return;
      playing = true;
      var url = URL.createObjectURL(blob);
      logo.src = url;
      window.setTimeout(function () {
        logo.src = still;
        URL.revokeObjectURL(url);
        playing = false;
      }, duration + 60);
    };
    fetch(logo.getAttribute("data-logo-burst"))
      .then(function (res) { return res.ok ? res.blob() : null; })
      .then(function (b) {
        if (!b) return;
        blob = b;
        play();
        trigger.addEventListener("mouseenter", play);
        trigger.addEventListener("focus", play);
      })
      .catch(function () {});
  });

  // Gameplay video: nothing loads from YouTube until the visitor asks for it.
  document.querySelectorAll(".crt[data-youtube-id]").forEach(function (screen) {
    var id = screen.getAttribute("data-youtube-id").trim();
    var button = screen.querySelector(".crt-play");
    if (!button || !id) return;

    // The play button only appears once there is a video to play.
    button.hidden = false;

    button.addEventListener("click", function () {
      var frame = document.createElement("div");
      frame.className = "crt-video";
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) + "?autoplay=1&rel=0&modestbranding=1";
      iframe.title = screen.getAttribute("data-video-title") || "Gameplay video";
      iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      frame.appendChild(iframe);

      var card = screen.querySelector(".crt-card");
      var swap = function () {
        if (card) card.remove();
        screen.querySelectorAll(".crt-poster").forEach(function (el) { el.remove(); });
        screen.classList.remove("is-powering");
        screen.appendChild(frame);
        iframe.focus();
      };

      if (reduceMotion) {
        swap();
      } else {
        screen.classList.add("is-powering");
        window.setTimeout(swap, 520);
      }
    });
  });

  // TV silhouette at any size: convex sides and tight corners, like the logo's screen.
  // Drawn as a clip-path from the element's real box so the curvature never stretches.
  var tvPath = function (w, h) {
    var clamp = function (v, lo, hi) { return Math.max(lo, Math.min(hi, v)); };
    var b = clamp(h * 0.035, 8, 22); // top and bottom bulge
    var s = clamp(w * 0.01, 5, 14); // side bulge
    var r = clamp(Math.min(w, h) * 0.12, 24, 64); // corner radius
    var f = function (n) { return Math.round(n * 10) / 10; };
    return "path('" + [
      "M", f(s), f(b + r),
      "Q", f(s), f(b), f(s + r), f(b),
      "Q", f(w / 2), f(-b), f(w - s - r), f(b),
      "Q", f(w - s), f(b), f(w - s), f(b + r),
      "Q", f(w + s), f(h / 2), f(w - s), f(h - b - r),
      "Q", f(w - s), f(h - b), f(w - s - r), f(h - b),
      "Q", f(w / 2), f(h + b), f(s + r), f(h - b),
      "Q", f(s), f(h - b), f(s), f(h - b - r),
      "Q", f(-s), f(h / 2), f(s), f(b + r),
      "Z"
    ].join(" ") + "')";
  };
  // Top-only variant: the curved TV edge as a separator, then a flat, square body.
  var tvTopPath = function (w, h) {
    var clamp = function (v, lo, hi) { return Math.max(lo, Math.min(hi, v)); };
    var b = clamp(w * 0.012, 8, 18); // top bulge
    var r = clamp(w * 0.04, 24, 56); // top corner radius
    var f = function (n) { return Math.round(n * 10) / 10; };
    return "path('" + [
      "M", 0, f(b + r),
      "Q", 0, f(b), f(r), f(b),
      "Q", f(w / 2), f(-b), f(w - r), f(b),
      "Q", f(w), f(b), f(w), f(b + r),
      "L", f(w), f(h),
      "L", 0, f(h),
      "Z"
    ].join(" ") + "')";
  };
  var shapeTv = function (el) {
    var box = el.getBoundingClientRect();
    if (!box.width || !box.height) return;
    var top = el.getAttribute("data-tv-shape") === "top";
    el.style.clipPath = top ? tvTopPath(box.width, box.height) : tvPath(box.width, box.height);
    el.style.borderRadius = "0";
  };
  var tvs = document.querySelectorAll("[data-tv-shape]");
  if (tvs.length && window.CSS && CSS.supports("clip-path", "path('M0 0')")) {
    if (window.ResizeObserver) {
      var ro = new ResizeObserver(function (entries) {
        entries.forEach(function (entry) { shapeTv(entry.target); });
      });
      tvs.forEach(function (el) { ro.observe(el); });
    } else {
      tvs.forEach(shapeTv);
      window.addEventListener("resize", function () { tvs.forEach(shapeTv); });
    }
  }

  // Links to files that are not uploaded yet become a marked placeholder.
  document.querySelectorAll("a[data-optional-file]").forEach(function (link) {
    if (!window.fetch) return;
    var markPending = function () {
      var note = document.createElement("span");
      note.className = "pending";
      note.textContent = link.getAttribute("data-pending-text") || "[File to come]";
      link.replaceWith(note);
    };
    fetch(link.getAttribute("href"), { method: "HEAD" })
      .then(function (res) {
        if (!res.ok) markPending();
      })
      .catch(markPending);
  });
})();
