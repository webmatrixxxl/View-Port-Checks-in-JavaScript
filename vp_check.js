  // Check if targetEl is in it's parent viewport
  function isElInViewport(targetEl, containerEl, offset = 0) {
    let scrollBott = containerEl.scrollTop + containerEl.clientHeight;
    let elOffsetBott = targetEl.offsetTop + targetEl.clientHeight;

    return (
      (containerEl.scrollTop <= targetEl.offsetTop && scrollBott >= elOffsetBott) ||
      (containerEl.scrollTop + offset >= targetEl.offsetTop && containerEl.scrollTop - offset <= elOffsetBott) ||
      (scrollBott + offset >= targetEl.offsetTop && scrollBott - offset <= elOffsetBott)
    );
  }


  // Check if targetEl is in it's parent center
  function isElInViewportCenter(targetEl, containerEl) {
    let scrollCenterPos = containerEl.scrollTop + (containerEl.clientHeight / 2),
      elOffsetTop = targetEl.offsetTop,
      elOffsetBott = elOffsetTop + targetEl.clientHeight;

    return scrollCenterPos > elOffsetTop && scrollCenterPos < elOffsetBott;
  }
