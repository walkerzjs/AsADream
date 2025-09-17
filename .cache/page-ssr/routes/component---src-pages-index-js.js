exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ ((module) => {

function _extends() {
  return module.exports = _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports["default"] = void 0;
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));
var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _excluded = ["sizes", "srcSet", "src", "style", "onLoad", "onError", "loading", "draggable", "ariaHidden"];
var logDeprecationNotice = function logDeprecationNotice(prop, replacement) {
  if (false) {}
  console.log("\n    The \"" + prop + "\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");
  if (replacement) {
    console.log("Please use " + replacement + " instead of \"" + prop + "\".");
  }
}; // Handle legacy props during their deprecation phase

var convertProps = function convertProps(props) {
  var convertedProps = (0, _extends2.default)({}, props);
  var resolutions = convertedProps.resolutions,
    sizes = convertedProps.sizes,
    critical = convertedProps.critical;
  if (resolutions) {
    convertedProps.fixed = resolutions;
    logDeprecationNotice("resolutions", "the gatsby-image v2 prop \"fixed\"");
    delete convertedProps.resolutions;
  }
  if (sizes) {
    convertedProps.fluid = sizes;
    logDeprecationNotice("sizes", "the gatsby-image v2 prop \"fluid\"");
    delete convertedProps.sizes;
  }
  if (critical) {
    logDeprecationNotice("critical", "the native \"loading\" attribute");
    convertedProps.loading = "eager";
  } // convert fluid & fixed to arrays so we only have to work with arrays

  if (convertedProps.fluid) {
    convertedProps.fluid = groupByMedia([].concat(convertedProps.fluid));
  }
  if (convertedProps.fixed) {
    convertedProps.fixed = groupByMedia([].concat(convertedProps.fixed));
  }
  return convertedProps;
};
/**
 * Checks if fluid or fixed are art-direction arrays.
 *
 * @param currentData  {{media?: string}[]}   The props to check for images.
 * @return {boolean}
 */

var hasArtDirectionSupport = function hasArtDirectionSupport(currentData) {
  return !!currentData && Array.isArray(currentData) && currentData.some(function (image) {
    return typeof image.media !== "undefined";
  });
};
/**
 * Tries to detect if a media query matches the current viewport.
 * @property media   {{media?: string}}  A media query string.
 * @return {boolean}
 */

var matchesMedia = function matchesMedia(_ref) {
  var media = _ref.media;
  return media ? isBrowser && !!window.matchMedia(media).matches : false;
};
/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string, media?: string}[], fixed: {src: string, media?: string}[]}} args
 * @return {string?} Returns image src or undefined it not given.
 */

var getImageCacheKey = function getImageCacheKey(_ref2) {
  var fluid = _ref2.fluid,
    fixed = _ref2.fixed;
  var srcData = getCurrentSrcData(fluid || fixed || []);
  return srcData && srcData.src;
};
/**
 * Returns the current src - Preferably with art-direction support.
 * @param currentData  {{media?: string}[], maxWidth?: Number, maxHeight?: Number}   The fluid or fixed image array.
 * @return {{src: string, media?: string, maxWidth?: Number, maxHeight?: Number}}
 */

var getCurrentSrcData = function getCurrentSrcData(currentData) {
  if (isBrowser && hasArtDirectionSupport(currentData)) {
    // Do we have an image for the current Viewport?
    var foundMedia = currentData.findIndex(matchesMedia);
    if (foundMedia !== -1) {
      return currentData[foundMedia];
    } // No media matches, select first element without a media condition

    var noMedia = currentData.findIndex(function (image) {
      return typeof image.media === "undefined";
    });
    if (noMedia !== -1) {
      return currentData[noMedia];
    }
  } // Else return the first image.

  return currentData[0];
}; // Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.

var imageCache = Object.create({});
var inImageCache = function inImageCache(props) {
  var convertedProps = convertProps(props);
  var cacheKey = getImageCacheKey(convertedProps);
  return imageCache[cacheKey] || false;
};
var activateCacheForImage = function activateCacheForImage(props) {
  var convertedProps = convertProps(props);
  var cacheKey = getImageCacheKey(convertedProps);
  if (cacheKey) {
    imageCache[cacheKey] = true;
  }
}; // Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/

var hasNativeLazyLoadSupport = typeof HTMLImageElement !== "undefined" && "loading" in HTMLImageElement.prototype;
var isBrowser = typeof window !== "undefined";
var hasIOSupport = isBrowser && window.IntersectionObserver;
var io;
var listeners = new WeakMap();
function getIO() {
  if (typeof io === "undefined" && typeof window !== "undefined" && window.IntersectionObserver) {
    io = new window.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (listeners.has(entry.target)) {
          var cb = listeners.get(entry.target); // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0

          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            io.unobserve(entry.target);
            listeners.delete(entry.target);
            cb();
          }
        }
      });
    }, {
      rootMargin: "200px"
    });
  }
  return io;
}
function generateImageSources(imageVariants) {
  return imageVariants.map(function (_ref3) {
    var src = _ref3.src,
      srcSet = _ref3.srcSet,
      srcSetWebp = _ref3.srcSetWebp,
      media = _ref3.media,
      sizes = _ref3.sizes;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: src
    }, srcSetWebp && /*#__PURE__*/_react.default.createElement("source", {
      type: "image/webp",
      media: media,
      srcSet: srcSetWebp,
      sizes: sizes
    }), srcSet && /*#__PURE__*/_react.default.createElement("source", {
      media: media,
      srcSet: srcSet,
      sizes: sizes
    }));
  });
} // Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions

function groupByMedia(imageVariants) {
  var withMedia = [];
  var without = [];
  imageVariants.forEach(function (variant) {
    return (variant.media ? withMedia : without).push(variant);
  });
  if (without.length > 1 && "development" !== "production") {
    console.warn("We've found " + without.length + " sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");
  }
  return [].concat(withMedia, without);
}
function generateTracedSVGSources(imageVariants) {
  return imageVariants.map(function (_ref4) {
    var src = _ref4.src,
      media = _ref4.media,
      tracedSVG = _ref4.tracedSVG;
    return /*#__PURE__*/_react.default.createElement("source", {
      key: src,
      media: media,
      srcSet: tracedSVG
    });
  });
}
function generateBase64Sources(imageVariants) {
  return imageVariants.map(function (_ref5) {
    var src = _ref5.src,
      media = _ref5.media,
      base64 = _ref5.base64;
    return /*#__PURE__*/_react.default.createElement("source", {
      key: src,
      media: media,
      srcSet: base64
    });
  });
}
function generateNoscriptSource(_ref6, isWebp) {
  var srcSet = _ref6.srcSet,
    srcSetWebp = _ref6.srcSetWebp,
    media = _ref6.media,
    sizes = _ref6.sizes;
  var src = isWebp ? srcSetWebp : srcSet;
  var mediaAttr = media ? "media=\"" + media + "\" " : "";
  var typeAttr = isWebp ? "type='image/webp' " : "";
  var sizesAttr = sizes ? "sizes=\"" + sizes + "\" " : "";
  return "<source " + typeAttr + mediaAttr + "srcset=\"" + src + "\" " + sizesAttr + "/>";
}
function generateNoscriptSources(imageVariants) {
  return imageVariants.map(function (variant) {
    return (variant.srcSetWebp ? generateNoscriptSource(variant, true) : "") + generateNoscriptSource(variant);
  }).join("");
}
var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getIO();
  if (observer) {
    observer.observe(el);
    listeners.set(el, cb);
  }
  return function () {
    observer.unobserve(el);
    listeners.delete(el);
  };
};
var noscriptImg = function noscriptImg(props) {
  // Check if prop exists before adding each attribute to the string output below to prevent
  // HTML validation issues caused by empty values like width="" and height=""
  var src = props.src ? "src=\"" + props.src + "\" " : "src=\"\" "; // required attribute

  var sizes = props.sizes ? "sizes=\"" + props.sizes + "\" " : "";
  var srcSet = props.srcSet ? "srcset=\"" + props.srcSet + "\" " : "";
  var title = props.title ? "title=\"" + props.title + "\" " : "";
  var alt = props.alt ? "alt=\"" + props.alt + "\" " : "alt=\"\" "; // required attribute

  var width = props.width ? "width=\"" + props.width + "\" " : "";
  var height = props.height ? "height=\"" + props.height + "\" " : "";
  var crossOrigin = props.crossOrigin ? "crossorigin=\"" + props.crossOrigin + "\" " : "";
  var loading = props.loading ? "loading=\"" + props.loading + "\" " : "";
  var draggable = props.draggable ? "draggable=\"" + props.draggable + "\" " : "";
  var sources = generateNoscriptSources(props.imageVariants);
  return "<picture>" + sources + "<img " + loading + width + height + sizes + srcSet + src + alt + title + crossOrigin + draggable + "style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";
}; // Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release

var Placeholder = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var src = props.src,
    imageVariants = props.imageVariants,
    generateSources = props.generateSources,
    spreadProps = props.spreadProps,
    ariaHidden = props.ariaHidden;
  var baseImage = /*#__PURE__*/_react.default.createElement(Img, (0, _extends2.default)({
    ref: ref,
    src: src
  }, spreadProps, {
    ariaHidden: ariaHidden
  }));
  return imageVariants.length > 1 ? /*#__PURE__*/_react.default.createElement("picture", null, generateSources(imageVariants), baseImage) : baseImage;
});
var Img = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var sizes = props.sizes,
    srcSet = props.srcSet,
    src = props.src,
    style = props.style,
    onLoad = props.onLoad,
    onError = props.onError,
    loading = props.loading,
    draggable = props.draggable,
    ariaHidden = props.ariaHidden,
    otherProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  return /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    "aria-hidden": ariaHidden,
    sizes: sizes,
    srcSet: srcSet,
    src: src
  }, otherProps, {
    onLoad: onLoad,
    onError: onError,
    ref: ref,
    loading: loading,
    draggable: draggable,
    style: (0, _extends2.default)({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }, style)
  }));
});
Img.propTypes = {
  style: _propTypes.default.object,
  onError: _propTypes.default.func,
  onLoad: _propTypes.default.func
};
var Image = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(Image, _React$Component);
  function Image(props) {
    var _this;
    _this = _React$Component.call(this, props) || this; // If this image has already been loaded before then we can assume it's
    // already in the browser cache so it's cheap to just show directly.

    _this.seenBefore = isBrowser && inImageCache(props);
    _this.isCritical = props.loading === "eager" || props.critical;
    _this.addNoScript = !(_this.isCritical && !props.fadeIn);
    _this.useIOSupport = !hasNativeLazyLoadSupport && hasIOSupport && !_this.isCritical && !_this.seenBefore;
    var isVisible = _this.isCritical || isBrowser && (hasNativeLazyLoadSupport || !_this.useIOSupport);
    _this.state = {
      isVisible: isVisible,
      imgLoaded: false,
      imgCached: false,
      fadeIn: !_this.seenBefore && props.fadeIn,
      isHydrated: false
    };
    _this.imageRef = /*#__PURE__*/_react.default.createRef();
    _this.placeholderRef = props.placeholderRef || /*#__PURE__*/_react.default.createRef();
    _this.handleImageLoaded = _this.handleImageLoaded.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  var _proto = Image.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      isHydrated: isBrowser
    });
    if (this.state.isVisible && typeof this.props.onStartLoad === "function") {
      this.props.onStartLoad({
        wasCached: inImageCache(this.props)
      });
    }
    if (this.isCritical) {
      var img = this.imageRef.current;
      if (img && img.complete) {
        this.handleImageLoaded();
      }
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.cleanUpListeners) {
      this.cleanUpListeners();
    }
  } // Specific to IntersectionObserver based lazy-load support
  ;
  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;
    if (this.useIOSupport && ref) {
      this.cleanUpListeners = listenToIntersections(ref, function () {
        var imageInCache = inImageCache(_this2.props);
        if (!_this2.state.isVisible && typeof _this2.props.onStartLoad === "function") {
          _this2.props.onStartLoad({
            wasCached: imageInCache
          });
        } // imgCached and imgLoaded must update after isVisible,
        // Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
        // imgLoaded and imgCached are in a 2nd setState call to be changed together,
        // avoiding initiating unnecessary animation frames from style changes.

        _this2.setState({
          isVisible: true
        }, function () {
          _this2.setState({
            imgLoaded: imageInCache,
            // `currentSrc` should be a string, but can be `undefined` in IE,
            // !! operator validates the value is not undefined/null/""
            // for lazyloaded components this might be null
            // TODO fix imgCached behaviour as it's now false when it's lazyloaded
            imgCached: !!(_this2.imageRef.current && _this2.imageRef.current.currentSrc)
          });
        });
      });
    }
  };
  _proto.handleImageLoaded = function handleImageLoaded() {
    activateCacheForImage(this.props);
    this.setState({
      imgLoaded: true
    });
    if (this.props.onLoad) {
      this.props.onLoad();
    }
  };
  _proto.render = function render() {
    var _convertProps = convertProps(this.props),
      title = _convertProps.title,
      alt = _convertProps.alt,
      className = _convertProps.className,
      _convertProps$style = _convertProps.style,
      style = _convertProps$style === void 0 ? {} : _convertProps$style,
      _convertProps$imgStyl = _convertProps.imgStyle,
      imgStyle = _convertProps$imgStyl === void 0 ? {} : _convertProps$imgStyl,
      _convertProps$placeho = _convertProps.placeholderStyle,
      placeholderStyle = _convertProps$placeho === void 0 ? {} : _convertProps$placeho,
      placeholderClassName = _convertProps.placeholderClassName,
      fluid = _convertProps.fluid,
      fixed = _convertProps.fixed,
      backgroundColor = _convertProps.backgroundColor,
      durationFadeIn = _convertProps.durationFadeIn,
      Tag = _convertProps.Tag,
      itemProp = _convertProps.itemProp,
      loading = _convertProps.loading,
      draggable = _convertProps.draggable;
    var imageVariants = fluid || fixed; // Abort early if missing image data (#25371)

    if (!imageVariants) {
      return null;
    }
    var shouldReveal = this.state.fadeIn === false || this.state.imgLoaded;
    var shouldFadeIn = this.state.fadeIn === true && !this.state.imgCached;
    var imageStyle = (0, _extends2.default)({
      opacity: shouldReveal ? 1 : 0,
      transition: shouldFadeIn ? "opacity " + durationFadeIn + "ms" : "none"
    }, imgStyle);
    var bgColor = typeof backgroundColor === "boolean" ? "lightgray" : backgroundColor;
    var delayHideStyle = {
      transitionDelay: durationFadeIn + "ms"
    };
    var imagePlaceholderStyle = (0, _extends2.default)({
      opacity: this.state.imgLoaded ? 0 : 1
    }, shouldFadeIn && delayHideStyle, imgStyle, placeholderStyle);
    var placeholderImageProps = {
      title: title,
      alt: !this.state.isVisible ? alt : "",
      style: imagePlaceholderStyle,
      className: placeholderClassName,
      itemProp: itemProp
    }; // Initial client render state needs to match SSR until hydration finishes.
    // Once hydration completes, render again to update to the correct image.
    // `imageVariants` is always an Array type at this point due to `convertProps()`

    var image = !this.state.isHydrated ? imageVariants[0] : getCurrentSrcData(imageVariants);
    if (fluid) {
      return /*#__PURE__*/_react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: (0, _extends2.default)({
          position: "relative",
          overflow: "hidden",
          maxWidth: image.maxWidth ? image.maxWidth + "px" : null,
          maxHeight: image.maxHeight ? image.maxHeight + "px" : null
        }, style),
        ref: this.handleRef,
        key: "fluid-" + JSON.stringify(image.srcSet)
      }, /*#__PURE__*/_react.default.createElement(Tag, {
        "aria-hidden": true,
        style: {
          width: "100%",
          paddingBottom: 100 / image.aspectRatio + "%"
        }
      }), bgColor && /*#__PURE__*/_react.default.createElement(Tag, {
        "aria-hidden": true,
        title: title,
        style: (0, _extends2.default)({
          backgroundColor: bgColor,
          position: "absolute",
          top: 0,
          bottom: 0,
          opacity: !this.state.imgLoaded ? 1 : 0,
          right: 0,
          left: 0
        }, shouldFadeIn && delayHideStyle)
      }), image.base64 && /*#__PURE__*/_react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: image.base64,
        spreadProps: placeholderImageProps,
        imageVariants: imageVariants,
        generateSources: generateBase64Sources
      }), image.tracedSVG && /*#__PURE__*/_react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: image.tracedSVG,
        spreadProps: placeholderImageProps,
        imageVariants: imageVariants,
        generateSources: generateTracedSVGSources
      }), this.state.isVisible && /*#__PURE__*/_react.default.createElement("picture", null, generateImageSources(imageVariants), /*#__PURE__*/_react.default.createElement(Img, {
        alt: alt,
        title: title,
        sizes: image.sizes,
        src: image.src,
        crossOrigin: this.props.crossOrigin,
        srcSet: image.srcSet,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError,
        itemProp: itemProp,
        loading: loading,
        draggable: draggable
      })), this.addNoScript && /*#__PURE__*/_react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title,
            loading: loading
          }, image, {
            imageVariants: imageVariants
          }))
        }
      }));
    }
    if (fixed) {
      var divStyle = (0, _extends2.default)({
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
        width: image.width,
        height: image.height
      }, style);
      if (style.display === "inherit") {
        delete divStyle.display;
      }
      return /*#__PURE__*/_react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: divStyle,
        ref: this.handleRef,
        key: "fixed-" + JSON.stringify(image.srcSet)
      }, bgColor && /*#__PURE__*/_react.default.createElement(Tag, {
        "aria-hidden": true,
        title: title,
        style: (0, _extends2.default)({
          backgroundColor: bgColor,
          width: image.width,
          opacity: !this.state.imgLoaded ? 1 : 0,
          height: image.height
        }, shouldFadeIn && delayHideStyle)
      }), image.base64 && /*#__PURE__*/_react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: image.base64,
        spreadProps: placeholderImageProps,
        imageVariants: imageVariants,
        generateSources: generateBase64Sources
      }), image.tracedSVG && /*#__PURE__*/_react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: image.tracedSVG,
        spreadProps: placeholderImageProps,
        imageVariants: imageVariants,
        generateSources: generateTracedSVGSources
      }), this.state.isVisible && /*#__PURE__*/_react.default.createElement("picture", null, generateImageSources(imageVariants), /*#__PURE__*/_react.default.createElement(Img, {
        alt: alt,
        title: title,
        width: image.width,
        height: image.height,
        sizes: image.sizes,
        src: image.src,
        crossOrigin: this.props.crossOrigin,
        srcSet: image.srcSet,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError,
        itemProp: itemProp,
        loading: loading,
        draggable: draggable
      })), this.addNoScript && /*#__PURE__*/_react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title,
            loading: loading
          }, image, {
            imageVariants: imageVariants
          }))
        }
      }));
    }
    return null;
  };
  return Image;
}(_react.default.Component);
Image.defaultProps = {
  fadeIn: true,
  durationFadeIn: 500,
  alt: "",
  Tag: "div",
  // We set it to `lazy` by default because it's best to default to a performant
  // setting and let the user "opt out" to `eager`
  loading: "lazy"
};
var fixedObject = _propTypes.default.shape({
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string,
  media: _propTypes.default.string
});
var fluidObject = _propTypes.default.shape({
  aspectRatio: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  sizes: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string,
  media: _propTypes.default.string,
  maxWidth: _propTypes.default.number,
  maxHeight: _propTypes.default.number
});
function requireFixedOrFluid(originalPropTypes) {
  return function (props, propName, componentName) {
    var _PropTypes$checkPropT;
    if (!props.fixed && !props.fluid) {
      throw new Error("The prop `fluid` or `fixed` is marked as required in `" + componentName + "`, but their values are both `undefined`.");
    }
    _propTypes.default.checkPropTypes((_PropTypes$checkPropT = {}, _PropTypes$checkPropT[propName] = originalPropTypes, _PropTypes$checkPropT), props, "prop", componentName);
  };
} // If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props

Image.propTypes = {
  resolutions: fixedObject,
  sizes: fluidObject,
  fixed: requireFixedOrFluid(_propTypes.default.oneOfType([fixedObject, _propTypes.default.arrayOf(fixedObject)])),
  fluid: requireFixedOrFluid(_propTypes.default.oneOfType([fluidObject, _propTypes.default.arrayOf(fluidObject)])),
  fadeIn: _propTypes.default.bool,
  durationFadeIn: _propTypes.default.number,
  title: _propTypes.default.string,
  alt: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  // Support Glamor's css prop.
  critical: _propTypes.default.bool,
  crossOrigin: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  style: _propTypes.default.object,
  imgStyle: _propTypes.default.object,
  placeholderStyle: _propTypes.default.object,
  placeholderClassName: _propTypes.default.string,
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  onLoad: _propTypes.default.func,
  onError: _propTypes.default.func,
  onStartLoad: _propTypes.default.func,
  Tag: _propTypes.default.string,
  itemProp: _propTypes.default.string,
  loading: _propTypes.default.oneOf(["auto", "lazy", "eager"]),
  draggable: _propTypes.default.bool
};
var _default = Image;
exports["default"] = _default;

/***/ }),

/***/ "./public/page-data/sq/d/2841359383.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2841359383.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"data":{"site":{"siteMetadata":{"title":"AsADream","description":"A starter blog demonstrating what Gatsby can do.","social":{"twitter":"walkerzjs"}}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3223064672.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3223064672.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAgX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAZ6MaZ0ycbr1BchFf//EABwQAAICAgMAAAAAAAAAAAAAAAEDAAISExEhM//aAAgBAQABBQLIQOvVeZMC+FtXQzVeLsdjPKo6/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHBAAAgICAwAAAAAAAAAAAAAAAAExQQIQERIh/9oACAEBAAY/AhUSds5pE8FCT93/AP/EAB4QAAICAQUBAAAAAAAAAAAAAAABESExQWFxgaGR/9oACAEBAAE/IY28rgtOD3syW08i4yX6BAtR1sNLr0OUyZU6Hm6Ext/T/9oADAMBAAIAAwAAABDcKHz/xAAXEQEBAQEAAAAAAAAAAAAAAAAAASFB/9oACAEDAQE/EI1eI//EABkRAAMAAwAAAAAAAAAAAAAAAAABERAxUf/aAAgBAgEBPxCFXRaeP//EABsQAQADAQEBAQAAAAAAAAAAAAEAESFRMYFB/9oACAEBAAE/EFMFRdqW1W0XYcihbXqeorJQL8S0L1eRTVmp4qyj5GAkXiLYi2roHJm36SuXZnybtcj/2Q==","width":50,"height":50,"src":"/static/62330e470e29f0cdc3ff27a230f42536/99438/profile-photo.jpg","srcSet":"/static/62330e470e29f0cdc3ff27a230f42536/99438/profile-photo.jpg 1x,\\n/static/62330e470e29f0cdc3ff27a230f42536/aba1d/profile-photo.jpg 1.5x,\\n/static/62330e470e29f0cdc3ff27a230f42536/b315d/profile-photo.jpg 2x"}}},"site":{"siteMetadata":{"author":{"name":"Junshuai Zhang (Jacob)","summary":"living in Australia developing interesting things."},"social":{"twitter":"walkerzjs"}}}}}');

/***/ }),

/***/ "./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/Header/Navbar/index.jsx");
/* harmony import */ var _Sidebar_SideMenu_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar/SideMenu/Index */ "./src/components/Header/Sidebar/SideMenu/Index.jsx");
/* harmony import */ var _Sidebar_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar/Modal */ "./src/components/Header/Sidebar/Modal.jsx");


// import Sidebar from "./Sidebar/Index";


const Layout = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sidebar_SideMenu_Index__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sidebar_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Header/Navbar/Content/Items/NameLogo.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/Header/Navbar/Content/Items/NameLogo.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _SharedNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SharedNavItem */ "./src/components/Header/Navbar/Content/SharedNavItem.jsx");



const NameLogo_ = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "NameLogo__NameLogo_"
})(["margin:0;margin-left:9.3vw;& li{margin:0;}@media (max-width:672px){margin-left:17.6px;}"]);
const NameLogo = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NameLogo_, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SharedNavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "/",
    label: "AsADream",
    ariaLabel: "navigate to home page"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NameLogo);

/***/ }),

/***/ "./src/components/Header/Navbar/Content/Items/NavItems.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/Header/Navbar/Content/Items/NavItems.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SharedNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SharedNavItem */ "./src/components/Header/Navbar/Content/SharedNavItem.jsx");
/* harmony import */ var _ThemeToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeToggle */ "./src/components/Header/Navbar/Content/Items/ThemeToggle.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");




const NavItems_ = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul.withConfig({
  displayName: "NavItems__NavItems_"
})(["display:flex;align-items:center;margin:0;margin-right:9.3vw;& li{margin:0;}@media (max-width:672px){display:none;}"]);
const NavItems = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavItems_, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SharedNavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ariaLabel: "navigate to Junshuai's portfolio",
    id: "https://master.dj3cz2uxgebt1.amplifyapp.com/",
    label: "MyPortfolio",
    type: "external"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SharedNavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "junshuai.jacob.zhang@gmail.com",
    label: "SendMeEmail",
    type: "email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ThemeToggle__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItems);

/***/ }),

/***/ "./src/components/Header/Navbar/Content/Items/ThemeToggle.jsx":
/*!********************************************************************!*\
  !*** ./src/components/Header/Navbar/Content/Items/ThemeToggle.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");



// https://www.w3schools.com/howto/howto_css_switch.asp
const ThemeToggleC = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "ThemeToggle__ThemeToggleC"
})(["list-style:none;height:30px;label{position:relative;-webkit-tap-highlight-color:transparent;display:inline-block;width:60px;height:30px;background-color:transparent;}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--grey-5);-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;}.slider:before{position:absolute;content:\"\";height:24px;width:24px;left:4px;bottom:3px;background-color:white;-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;}.slider.round{border-radius:30px;}.slider.round:before{border-radius:50%;}& input{opacity:0;width:0;height:0;}input:checked + .slider{background-color:#43bdf5;}input:focus + .slider{}input:checked + .slider:before{-webkit-transform:translateX(28px);-ms-transform:translateX(28px);transform:translateX(28px);}p{width:0;height:0;opacity:0;}"]);
const ThemeToggle = () => {
  const theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);
  const onChange = () => {
    theme.setTheme({
      mode: theme.mode === "light" ? "dark" : "light"
    });
    window.__theme = theme.mode === "light" ? "dark" : "light";
  };
  const isChecked = () => {
    if (typeof window !== "undefined") {
      let result = window.__theme === "light" ? true : false;
      return result;
    } else {
      return true;
    }
  };

  // useEffect(() => {
  //   console.log("theme: ", theme)
  //   console.log("re render")
  // })

  let content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "60px"
    }
  });
  // let content = null
  if (typeof window !== "undefined" && window.__theme) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ThemeToggleC, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      "aria-label": "Press Space key to toggle the theme",
      type: "checkbox",
      onChange: onChange,
      checked: isChecked()
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "slider round"
    })));
  }
  return content;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeToggle);

/***/ }),

/***/ "./src/components/Header/Navbar/Content/SharedNavItem.jsx":
/*!****************************************************************!*\
  !*** ./src/components/Header/Navbar/Content/SharedNavItem.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");




const textColor = styled_theming__WEBPACK_IMPORTED_MODULE_1___default()("mode", {
  light: "var(--black)",
  dark: "var(--white)"
});
// appl

const NavLink_ = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "SharedNavItem__NavLink_"
})(["list-style:none;margin-right:20px !important;& a{font-size:20px;color:", ";text-decoration:none;box-shadow:none;transition:all 0.2s ease-out;@media (max-width:1450px){font-size:17.8px;}}cursor:pointer;opacity:1;@media (max-width:166px){font-size:14px;}"], textColor);
const SharedNavButton = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavLink_, {
    "aria-label": `link to ${props.label} section`
  }, (() => {
    switch (props.type) {
      case "external":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: props.id,
          rel: "noopener noreferrer"
        }, props.label);
      case "email":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: `mailto:${props.id}`,
          rel: "noopener noreferrer"
        }, props.label);
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
          to: `${props.id}`
        }, props.label);
    }
  })());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SharedNavButton);

/***/ }),

/***/ "./src/components/Header/Navbar/Content/SidebarToggle.jsx":
/*!****************************************************************!*\
  !*** ./src/components/Header/Navbar/Content/SidebarToggle.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _Shared_SidebarToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/SidebarToggle */ "./src/components/Header/Shared/SidebarToggle.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_actions_sidebarActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../store/actions/sidebarActions */ "./store/actions/sidebarActions.js");





const SidebarToggle_ = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "SidebarToggle__SidebarToggle_"
})(["@media (min-width:673px){display:none;}"]);
const SidebarToggleNav = props => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const onClick = () => {
    dispatch((0,_store_actions_sidebarActions__WEBPACK_IMPORTED_MODULE_2__.toggleSideDrawer)());
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SidebarToggle_, {
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Shared_SidebarToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ariaLabel: "Toggle side drawer"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarToggleNav);

/***/ }),

/***/ "./src/components/Header/Navbar/index.jsx":
/*!************************************************!*\
  !*** ./src/components/Header/Navbar/index.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nav: () => (/* binding */ Nav),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content_Items_NameLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content/Items/NameLogo */ "./src/components/Header/Navbar/Content/Items/NameLogo.jsx");
/* harmony import */ var _Content_Items_NavItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content/Items/NavItems */ "./src/components/Header/Navbar/Content/Items/NavItems.jsx");
/* harmony import */ var _Content_SidebarToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content/SidebarToggle */ "./src/components/Header/Navbar/Content/SidebarToggle.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_4__);






const backgroundColor = styled_theming__WEBPACK_IMPORTED_MODULE_4___default()("mode", {
  light: "var(--white)",
  dark: "var(--black)"
});
const borderBottom = styled_theming__WEBPACK_IMPORTED_MODULE_4___default()("mode", {
  light: "2px solid var(--grey-1)",
  dark: "2px solid var(--black)"
});
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].nav.withConfig({
  displayName: "Navbar__Nav"
})(["z-index:1100;position:fixed;backface-visibility:hidden;top:0px;left:0px;width:100%;height:70px;background-color:", ";border-bottom:", ";display:flex;align-items:center;justify-content:space-between;transition:background-color 0.2s ease-out,border-bottom 0.2s ease-out;"], backgroundColor, borderBottom);
const Navbar = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Nav, {
    "aria-label": "Navigation bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content_Items_NameLogo__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content_Items_NavItems__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content_SidebarToggle__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/components/Header/Shared/Modal.jsx":
/*!************************************************!*\
  !*** ./src/components/Header/Shared/Modal.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const Modal_ = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Modal__Modal_"
})(["position:fixed;z-index:1100;width:100vw;left:0;top:0;right:0;bottom:0;background:var(--black);opacity:0.5;transition:opacity 0.2s ease;transform:", ";visibility:", ";opacity:", ";"], props => props.isOpen ? "translateZ(0)" : "translateZ(-100px)", props => props.isOpen ? "visible" : "hidden", props => props.isOpen ? "0.5" : "0");
const Modal = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Modal_, {
    onClick: () => props.onClick(),
    isOpen: props.isOpen,
    "aria-label": props.ariaLabel
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/components/Header/Shared/SidebarToggle.jsx":
/*!********************************************************!*\
  !*** ./src/components/Header/Shared/SidebarToggle.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_1__);



const color = styled_theming__WEBPACK_IMPORTED_MODULE_1___default()("mode", {
  light: "invert(0)",
  dark: "invert(1)"
});
const SidebarToggle_ = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "SidebarToggle__SidebarToggle_"
})(["background:none;border:none;margin-right:17.6px;display:flex;align-items:center;img{margin:0;display:block;width:35px;height:35px;filter:", ";transition:all 0.2s ease-out;}cursor:pointer;"], color);
const SidebarToggle = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SidebarToggle_, {
    className: "SidebarToggle",
    "aria-label": props.ariaLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/navMenuToggle.svg",
    alt: "Sidebar menu toggle"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarToggle);

/***/ }),

/***/ "./src/components/Header/Sidebar/Modal.jsx":
/*!*************************************************!*\
  !*** ./src/components/Header/Sidebar/Modal.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/Modal */ "./src/components/Header/Shared/Modal.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_actions_sidebarActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/actions/sidebarActions */ "./store/actions/sidebarActions.js");




const Modal_Sidebar = props => {
  //   useEffect(() => {
  //     document.body.style.overflow = "hidden";
  //   });
  const isOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.sidebarReducer.isOpen);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const onClick = () => {
    dispatch((0,_store_actions_sidebarActions__WEBPACK_IMPORTED_MODULE_2__.toggleSideDrawer)());
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Shared_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: onClick,
    isOpen: isOpen,
    ariaLabel: "Sidebar Modal"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal_Sidebar);

/***/ }),

/***/ "./src/components/Header/Sidebar/SideMenu/Header/Index.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/Header/Sidebar/SideMenu/Header/Index.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toggle */ "./src/components/Header/Sidebar/SideMenu/Header/Toggle.jsx");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_2__);




const backgroundColor = styled_theming__WEBPACK_IMPORTED_MODULE_2___default()("mode", {
  light: "var(--white)",
  dark: "var(--grey-5)"
});
const Header_ = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Index__Header_"
})(["height:70px;display:flex;flex-direction:column;align-items:flex-end;justify-content:center;background-color:", ";transition:all 0.2s ease-out;"], backgroundColor);
const Header = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header_, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Toggle__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Header/Sidebar/SideMenu/Header/Toggle.jsx":
/*!******************************************************************!*\
  !*** ./src/components/Header/Sidebar/SideMenu/Header/Toggle.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _Shared_SidebarToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Shared/SidebarToggle */ "./src/components/Header/Shared/SidebarToggle.jsx");
/* harmony import */ var _store_actions_sidebarActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../store/actions/sidebarActions */ "./store/actions/sidebarActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");





const SidebarToggle_ = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Toggle__SidebarToggle_"
})([""]);
const SidebarToggleDrawer = props => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const onClick = () => {
    dispatch((0,_store_actions_sidebarActions__WEBPACK_IMPORTED_MODULE_2__.toggleSideDrawer)());
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SidebarToggle_, {
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Shared_SidebarToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ariaLabel: "Toggle side drawer"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarToggleDrawer);

/***/ }),

/***/ "./src/components/Header/Sidebar/SideMenu/Index.jsx":
/*!**********************************************************!*\
  !*** ./src/components/Header/Sidebar/SideMenu/Index.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _Header_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/Index */ "./src/components/Header/Sidebar/SideMenu/Header/Index.jsx");
/* harmony import */ var _MenuList_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuList/Index */ "./src/components/Header/Sidebar/SideMenu/MenuList/Index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");





const SideMenu_ = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Index__SideMenu_"
})(["position:fixed;right:0;top:0;bottom:0;overflow-x:auto;overflow-y:auto;height:100vh;width:250px;max-width:100vw;z-index:9000;display:flex;flex-direction:column;transition:opacity 0.2s ease,transform 0.2s ease,visibility 0.2s ease;visibility:", ";transform:", ";opacity:", ";"], props => props.isOpen ? "visible" : "hidden", props => props.isOpen ? "translateX(0)" : "translateX(100%)", props => props.isOpen ? "1" : "0");
const SideMenu = props => {
  const isOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.sidebarReducer.isOpen);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SideMenu_, {
    isOpen: isOpen,
    "aria-label": "Sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_Index__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuList_Index__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideMenu);

/***/ }),

/***/ "./src/components/Header/Sidebar/SideMenu/MenuList/Index.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/Header/Sidebar/SideMenu/MenuList/Index.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "./src/components/Header/Sidebar/SideMenu/MenuList/MenuItem.jsx");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ThemeToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeToggle */ "./src/components/Header/Sidebar/SideMenu/MenuList/ThemeToggle.jsx");





const backgroundColor = styled_theming__WEBPACK_IMPORTED_MODULE_2___default()("mode", {
  light: "var(--white)",
  dark: "var(--grey-5)"
});
const MenuList_ = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul.withConfig({
  displayName: "Index__MenuList_"
})(["margin:0;list-style:none;flex:1;background-color:", ";padding:20px;padding-top:30px;transition:all 0.2s ease-out;"], backgroundColor);
const MenuList = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuList_, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "https://my-portfoliojsz.com",
    label: "My Portfolio",
    type: "external"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "walkerzjs2@gmail.com",
    label: "Send Me Email",
    type: "email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ThemeToggle__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuList);

/***/ }),

/***/ "./src/components/Header/Sidebar/SideMenu/MenuList/MenuItem.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/Header/Sidebar/SideMenu/MenuList/MenuItem.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_1__);



const textColor = styled_theming__WEBPACK_IMPORTED_MODULE_1___default()("mode", {
  light: "var(--black)",
  dark: "var(--white)"
});
const MenuItem_ = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "MenuItem__MenuItem_"
})(["margin:0;& a{font-size:18px;box-shadow:none;height:44px;width:100%;padding-left:10%;text-decoration:none;color:", ";display:block;display:flex;align-items:center;transition:all 0.2s ease-out;}cursor:pointer;"], textColor);
const MenuItem = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuItem_, null, (() => {
    switch (props.type) {
      case "external":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: props.id,
          rel: "noopener noreferrer"
        }, props.label);
      case "email":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: `mailto:${props.id}`,
          rel: "noopener noreferrer"
        }, props.label);
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: `${props.id}`,
          rel: "noopener noreferrer"
        }, props.label);
    }
  })());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);

/***/ }),

/***/ "./src/components/Header/Sidebar/SideMenu/MenuList/ThemeToggle.jsx":
/*!*************************************************************************!*\
  !*** ./src/components/Header/Sidebar/SideMenu/MenuList/ThemeToggle.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");



// https://www.w3schools.com/howto/howto_css_switch.asp
const ThemeToggleC = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "ThemeToggle__ThemeToggleC"
})(["-webkit-tap-highlight-color:transparent;position:relative;display:block;margin-left:10%;margin-top:15px;width:60px;height:30px;.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--grey-3);-webkit-transition:0.2s ease-out;transition:0.2s ease-out;}.slider:before{position:absolute;content:\"\";height:24px;width:24px;left:4px;bottom:3px;background-color:white;-webkit-transition:0.2s ease-out;transition:0.2s ease-out;}.slider.round{border-radius:30px;}.slider.round:before{border-radius:50%;}& input{opacity:0;width:0;height:0;}input:checked + .slider{background-color:#43bdf5;}input:focus + .slider{}input:checked + .slider:before{-webkit-transform:translateX(28px);-ms-transform:translateX(28px);transform:translateX(28px);}p{width:0;height:0;opacity:0;}"]);
const ThemeToggle = props => {
  const theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);
  const onChange = () => {
    theme.setTheme({
      mode: theme.mode === "light" ? "dark" : "light"
    });
    window.__theme = theme.mode === "light" ? "dark" : "light";
  };
  const isChecked = () => {
    if (typeof window !== "undefined") {
      let result = window.__theme === "light" ? true : false;
      return result;
    } else {
      return true;
    }
  };

  // useEffect(() => {
  //   console.log("theme: ", theme)
  //   console.log("re render")
  // })

  let content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "60px"
    }
  });
  // let content = null
  if (typeof window !== "undefined" && window.__theme) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ThemeToggleC, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      "aria-label": "Click to change theme",
      type: "checkbox",
      onChange: onChange,
      checked: isChecked()
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "slider round"
    })));
  }
  return content;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeToggle);

/***/ }),

/***/ "./src/components/bio.js":
/*!*******************************!*\
  !*** ./src/components/bio.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3223064672_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3223064672.json */ "./public/page-data/sq/d/3223064672.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var _utils_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/typography */ "./src/utils/typography.js");

/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */




const Bio = () => {
  const data = _public_page_data_sq_d_3223064672_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const {
    author,
    social
  } = data.site.siteMetadata;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    style: {
      display: `flex`,
      marginBottom: (0,_utils_typography__WEBPACK_IMPORTED_MODULE_3__.rhythm)(2.5)
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fixed: data.avatar.childImageSharp.fixed,
    alt: author.name,
    style: {
      marginRight: (0,_utils_typography__WEBPACK_IMPORTED_MODULE_3__.rhythm)(1 / 2),
      marginBottom: 0,
      minWidth: 50,
      borderRadius: `100%`
    },
    imgStyle: {
      borderRadius: `50%`
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Written by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("strong", null, author.name), " ", author.summary, ` `));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bio);

/***/ }),

/***/ "./src/components/layout.css":
/*!***********************************!*\
  !*** ./src/components/layout.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _utils_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/typography */ "./src/utils/typography.js");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.css */ "./src/components/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.jsx");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-theming */ "./node_modules/styled-theming/index.js");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_5__);







const backgroundColor = styled_theming__WEBPACK_IMPORTED_MODULE_5___default()("mode", {
  light: "var(--grey-4)",
  dark: "var(--grey-5)"
});
const textColor = styled_theming__WEBPACK_IMPORTED_MODULE_5___default()("mode", {
  light: "var(--black)",
  dark: "var(--white)"
});
const Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "layout__Container"
})(["position:relative;width:100%;min-height:100vh;padding-top:70px;background-color:", ";transition:all 0.2s ease-out;color:", ";"], backgroundColor, textColor);
const Layout = ({
  location,
  title,
  children
}) => {
  const rootPath = `${""}/`;
  let header;
  if (location.pathname === rootPath) {
    //header to change to navbar
    header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      style: {
        ...(0,_utils_typography__WEBPACK_IMPORTED_MODULE_2__.scale)(1.5),
        marginBottom: (0,_utils_typography__WEBPACK_IMPORTED_MODULE_2__.rhythm)(1.5),
        marginTop: 0,
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      style: {
        boxShadow: `none`,
        color: `inherit`
      },
      to: `/`
    }, title));
  } else {
    header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      style: {
        marginTop: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      style: {
        boxShadow: `none`,
        color: `inherit`
      },
      to: `/`
    }, title));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginLeft: `auto`,
      marginRight: `auto`,
      // maxWidth: rhythm(24),
      fontFamily: `Noto Sans, sans-serif`,
      maxWidth: "768px",
      padding: `${(0,_utils_typography__WEBPACK_IMPORTED_MODULE_2__.rhythm)(1.5)} 30px`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    style: {
      position: "absolute",
      bottom: "20px",
      margin: "auto"
    }
  }, new Date().getFullYear(), ", By", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://master.dj3cz2uxgebt1.amplifyapp.com/",
    target: "__blank",
    rel: "noopener noreferrer"
  }, "Junshuai Zhang (Jacob)"), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.linkedin.com/in/junshuai-zhang-55774594/",
    target: "__blank"
  }, "LinkedIn"), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/walkerzjs",
    target: "__blank",
    rel: "noopener noreferrer"
  }, "Github"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2841359383_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2841359383.json */ "./public/page-data/sq/d/2841359383.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */




const SEO = ({
  description,
  lang,
  meta,
  title
}) => {
  const {
    site
  } = _public_page_data_sq_d_2841359383_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
    htmlAttributes: {
      lang
    },
    title: title,
    titleTemplate: `%s | ${site.siteMetadata.title}`,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: title
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    }, {
      name: `twitter:creator`,
      content: site.siteMetadata.social.twitter
    }, {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta)
  });
};
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};
SEO.propTypes = {
  description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  lang: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  meta: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_bio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/bio */ "./src/components/bio.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _utils_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/typography */ "./src/utils/typography.js");






const BlogIndex = ({
  data,
  location
}) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    location: location,
    title: siteTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "All posts"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_bio__WEBPACK_IMPORTED_MODULE_2__["default"], null), posts.map(({
    node
  }) => {
    const title = node.frontmatter.title || node.fields.slug;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
      key: node.fields.slug
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      style: {
        marginBottom: (0,_utils_typography__WEBPACK_IMPORTED_MODULE_5__.rhythm)(1 / 4),
        fontFamily: "Noto Sans, serif"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      style: {
        boxShadow: `none`
      },
      to: node.fields.slug
    }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, node.frontmatter.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      dangerouslySetInnerHTML: {
        __html: node.frontmatter.description || node.excerpt
      }
    })));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogIndex);
const pageQuery = "1185691078";

/***/ }),

/***/ "./store/actions/sidebarActions.js":
/*!*****************************************!*\
  !*** ./store/actions/sidebarActions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleSideDrawer: () => (/* binding */ toggleSideDrawer)
/* harmony export */ });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./store/actions/actionTypes.js");

const toggleSideDrawer = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.TOGGLE
  };
};

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map