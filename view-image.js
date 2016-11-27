(function(_0x90fex1) {
    _0x90fex1['fn']['lightBox'] = function(_0x90fex2) {
        _0x90fex2 = jQuery['extend']({
                overlayBgColor: '#151515',
                overlayOpacity: 0.6,
                fixedNavigation: true,
                imageLoading: 'http://3.bp.blogspot.com/-BbfO2TakpeI/VBpAarxCJeI/AAAAAAAAGYc/K2aLB_DuOvI/s1600/loading.gif',
                imageBtnPrev: 'http://3.bp.blogspot.com/-JGND9bP-lUw/VBpAbJXYN1I/AAAAAAAAGYU/ToXBXPcWAXA/s1600/next-image2.png',
                imageBtnNext: 'http://3.bp.blogspot.com/-mRqZHLP6DmQ/VBpAah779LI/AAAAAAAAGYM/UJUWudqQ45E/s1600/next-image1.png',
                imageBtnClose: 'http://1.bp.blogspot.com/-5D4Z1sJCL8Y/VBpAaU61ckI/AAAAAAAAGYI/XzoT9CvqWI0/s1600/close-imagewhite.png',
                imageBlank: 'http://3.bp.blogspot.com/-1ju4NhcwXZY/VAIMANGR1uI/AAAAAAAABPc/iLik6Vso6pg/s1600/blank.gif',
                containerBorderSize: 10,
                containerResizeSpeed: 300,
                txtImage: 'Image',
                txtOf: 'of',
                keyToClose: 'c',
                keyToPrev: 'p',
                keyToNext: 'n',
                imageArray: [],
                activeImage: 0
            },
            _0x90fex2);
        var _0x90fex3 = this;

        function _0x90fex4() {
            _0x90fex5(this, _0x90fex3);
            return false;
        }

        function _0x90fex5(_0x90fex6, _0x90fex7) {
            _0x90fex1('embed, object, select')['css']({
                visibility: 'hidden'
            });
            _0x90fex9();
            _0x90fex2['imageArray']['length'] = 0;
            _0x90fex2['activeImage'] = 0;
            if (_0x90fex7['length'] == 1) {
                _0x90fex2['imageArray']['push'](new Array(_0x90fex6['getAttribute']('href'), _0x90fex6['getAttribute']('title')))
            } else {
                for (var _0x90fex8 = 0; _0x90fex8 < _0x90fex7['length']; _0x90fex8++) {
                    _0x90fex2['imageArray']['push'](new Array(_0x90fex7[_0x90fex8]['getAttribute']('href'), _0x90fex7[_0x90fex8]['getAttribute']('title')))
                }
            };
            while (_0x90fex2['imageArray'][_0x90fex2['activeImage']][0] != _0x90fex6['getAttribute']('href')) {
                _0x90fex2['activeImage']++
            };
            _0x90fexb();
        }

        function _0x90fex9() {
            _0x90fex1('body')['append']('<div id="jquery-overlay"></div><div id="jquery-lightbox"><div id="lightbox-container-image-box"><div id="lightbox-container-image"><img id="lightbox-image"><div style="" id="lightbox-nav"><a href="#" id="lightbox-nav-btnPrev"></a><a href="#" id="lightbox-nav-btnNext"></a></div><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="' + _0x90fex2['imageLoading'] + '"></a></div></div></div><div id="lightbox-container-image-data-box"><div id="lightbox-container-image-data"><div id="lightbox-image-details"><span id="lightbox-image-details-caption"></span><span id="lightbox-image-details-currentNumber"></span></div><div id="lightbox-secNav"><a href="#" id="lightbox-secNav-btnClose"><img src="' + _0x90fex2['imageBtnClose'] + '"></a></div></div></div></div>');
            var _0x90fex8 = _0x90fex19();
            _0x90fex1('#jquery-overlay')['css']({
                backgroundColor: _0x90fex2['overlayBgColor'],
                opacity: _0x90fex2['overlayOpacity'],
                width: _0x90fex8[0],
                height: _0x90fex8[1]
            })['fadeIn']();
            var _0x90fex7 = _0x90fex1a();
            _0x90fex1('#jquery-lightbox')['css']({
                top: _0x90fex7[1] + (_0x90fex8[3] / 10),
                left: _0x90fex7[0]
            })['show']();
            _0x90fex1('#jquery-overlay,#jquery-lightbox')['click'](function() {
                _0x90fex18()
            });
            _0x90fex1('#lightbox-loading-link,#lightbox-secNav-btnClose')['click'](function() {
                _0x90fex18();
                return false;
            });
            _0x90fex1(window)['resize'](function() {
                var _0x90fex6 = _0x90fex19();
                _0x90fex1('#jquery-overlay')['css']({
                    width: _0x90fex6[0],
                    height: _0x90fex6[1]
                });
                var _0x90fexa = _0x90fex1a();
                _0x90fex1('#jquery-lightbox')['css']({
                    top: _0x90fexa[1] + (_0x90fex6[3] / 10),
                    left: _0x90fexa[0]
                });
            });
        }

        function _0x90fexb() {
            _0x90fex1('#lightbox-loading')['show']();
            if (_0x90fex2['fixedNavigation']) {
                _0x90fex1('#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber')['hide']()
            } else {
                _0x90fex1('#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber')['hide']()
            };
            var _0x90fex8 = new Image();
            _0x90fex8['onload'] = function() {
                _0x90fex1('#lightbox-image')['attr']('src', _0x90fex2['imageArray'][_0x90fex2['activeImage']][0]);
                _0x90fexc(_0x90fex8['width'], _0x90fex8['height']);
                _0x90fex8['onload'] = function() {};
            };
            _0x90fex8['src'] = _0x90fex2['imageArray'][_0x90fex2['activeImage']][0];
        }

        function _0x90fexc(_0x90fexa, _0x90fexd) {
            var _0x90fex8 = _0x90fex1('#lightbox-container-image-box')['width']();
            var _0x90fexe = _0x90fex1('#lightbox-container-image-box')['height']();
            var _0x90fexf = (_0x90fexa + (_0x90fex2['containerBorderSize'] * 2));
            var _0x90fex6 = (_0x90fexd + (_0x90fex2['containerBorderSize'] * 2));
            var _0x90fex7 = _0x90fex8 - _0x90fexf;
            var _0x90fex10 = _0x90fexe - _0x90fex6;
            _0x90fex1('#lightbox-container-image-box')['animate']({
                    width: _0x90fexf,
                    height: _0x90fex6
                },
                _0x90fex2['containerResizeSpeed'],
                function() {
                    _0x90fex11()
                });
            if ((_0x90fex7 == 0) && (_0x90fex10 == 0)) {
                if (_0x90fex1['browser']['msie']) {
                    _0x90fex1b(250)
                } else {
                    _0x90fex1b(100)
                }
            };
            _0x90fex1('#lightbox-container-image-data-box')['css']({
                width: _0x90fexa
            });
            _0x90fex1('#lightbox-nav-btnPrev,#lightbox-nav-btnNext')['css']({
                height: _0x90fexd + (_0x90fex2['containerBorderSize'] * 2)
            });
        }

        function _0x90fex11() {
            _0x90fex1('#lightbox-loading')['hide']();
            _0x90fex1('#lightbox-image')['fadeIn'](function() {
                _0x90fex12();
                _0x90fex13();
            });
            _0x90fex17();
        }

        function _0x90fex12() {
            _0x90fex1('#lightbox-container-image-data-box')['slideDown']('fast');
            _0x90fex1('#lightbox-image-details-caption')['hide']();
            if (_0x90fex2['imageArray'][_0x90fex2['activeImage']][1]) {
                _0x90fex1('#lightbox-image-details-caption')['html'](_0x90fex2['imageArray'][_0x90fex2['activeImage']][1])['show']()
            };
            if (_0x90fex2['imageArray']['length'] > 1) {
                _0x90fex1('#lightbox-image-details-currentNumber')['html'](_0x90fex2['txtImage'] + ' ' + (_0x90fex2['activeImage'] + 1) + ' ' + _0x90fex2['txtOf'] + ' ' + _0x90fex2['imageArray']['length'])['show']()
            };
        }

        function _0x90fex13() {
            _0x90fex1('#lightbox-nav')['show']();
            _0x90fex1('#lightbox-nav-btnPrev,#lightbox-nav-btnNext')['css']({
                background: 'transparent url(' + _0x90fex2['imageBlank'] + ') no-repeat'
            });
            if (_0x90fex2['activeImage'] != 0) {
                if (_0x90fex2['fixedNavigation']) {
                    _0x90fex1('#lightbox-nav-btnPrev')['css']({
                        background: 'url(' + _0x90fex2['imageBtnPrev'] + ') left 15% no-repeat'
                    })['unbind']()['bind']('click', function() {
                        _0x90fex2['activeImage'] = _0x90fex2['activeImage'] - 1;
                        _0x90fexb();
                        return false;
                    })
                } else {
                    _0x90fex1('#lightbox-nav-btnPrev')['unbind']()['hover'](function() {
                            _0x90fex1(this)['css']({
                                background: 'url(' + _0x90fex2['imageBtnPrev'] + ') left 15% no-repeat'
                            })
                        },
                        function() {
                            _0x90fex1(this)['css']({
                                background: 'transparent url(' + _0x90fex2['imageBlank'] + ') no-repeat'
                            })
                        })['show']()['bind']('click', function() {
                        _0x90fex2['activeImage'] = _0x90fex2['activeImage'] - 1;
                        _0x90fexb();
                        return false;
                    })
                }
            };
            if (_0x90fex2['activeImage'] != (_0x90fex2['imageArray']['length'] - 1)) {
                if (_0x90fex2['fixedNavigation']) {
                    _0x90fex1('#lightbox-nav-btnNext')['css']({
                        background: 'url(' + _0x90fex2['imageBtnNext'] + ') right 15% no-repeat'
                    })['unbind']()['bind']('click', function() {
                        _0x90fex2['activeImage'] = _0x90fex2['activeImage'] + 1;
                        _0x90fexb();
                        return false;
                    })
                } else {
                    _0x90fex1('#lightbox-nav-btnNext')['unbind']()['hover'](function() {
                            _0x90fex1(this)['css']({
                                background: 'url(' + _0x90fex2['imageBtnNext'] + ') right 15% no-repeat'
                            })
                        },
                        function() {
                            _0x90fex1(this)['css']({
                                background: 'transparent url(' + _0x90fex2['imageBlank'] + ') no-repeat'
                            })
                        })['show']()['bind']('click', function() {
                        _0x90fex2['activeImage'] = _0x90fex2['activeImage'] + 1;
                        _0x90fexb();
                        return false;
                    })
                }
            };
            _0x90fex14();
        }

        function _0x90fex14() {
            _0x90fex1(document)['keydown'](function(_0x90fex8) {
                _0x90fex16(_0x90fex8)
            })
        }

        function _0x90fex15() {
            _0x90fex1(document)['unbind']()
        }

        function _0x90fex16(_0x90fex8) {
            if (_0x90fex8 == null) {
                keycode = event['keyCode'];
                escapeKey = 27;
            } else {
                keycode = _0x90fex8['keyCode'];
                escapeKey = _0x90fex8['DOM_VK_ESCAPE'];
            };
            key = String['fromCharCode'](keycode)['toLowerCase']();
            if ((key == _0x90fex2['keyToClose']) || (key == 'x') || (keycode == escapeKey)) {
                _0x90fex18()
            };
            if ((key == _0x90fex2['keyToPrev']) || (keycode == 37)) {
                if (_0x90fex2['activeImage'] != 0) {
                    _0x90fex2['activeImage'] = _0x90fex2['activeImage'] - 1;
                    _0x90fexb();
                    _0x90fex15();
                }
            };
            if ((key == _0x90fex2['keyToNext']) || (keycode == 39)) {
                if (_0x90fex2['activeImage'] != (_0x90fex2['imageArray']['length'] - 1)) {
                    _0x90fex2['activeImage'] = _0x90fex2['activeImage'] + 1;
                    _0x90fexb();
                    _0x90fex15();
                }
            };
        }

        function _0x90fex17() {
            if ((_0x90fex2['imageArray']['length'] - 1) > _0x90fex2['activeImage']) {
                objNext = new Image();
                objNext['src'] = _0x90fex2['imageArray'][_0x90fex2['activeImage'] + 1][0];
            };
            if (_0x90fex2['activeImage'] > 0) {
                objPrev = new Image();
                objPrev['src'] = _0x90fex2['imageArray'][_0x90fex2['activeImage'] - 1][0];
            };
        }

        function _0x90fex18() {
            _0x90fex1('#jquery-lightbox')['remove']();
            _0x90fex1('#jquery-overlay')['fadeOut'](function() {
                _0x90fex1('#jquery-overlay')['remove']()
            });
            _0x90fex1('embed, object, select')['css']({
                visibility: 'visible'
            });
        }

        function _0x90fex19() {
            var _0x90fex6, _0x90fex8;
            if (window['innerHeight'] && window['scrollMaxY']) {
                _0x90fex6 = window['innerWidth'] + window['scrollMaxX'];
                _0x90fex8 = window['innerHeight'] + window['scrollMaxY'];
            } else {
                if (document['body']['scrollHeight'] > document['body']['offsetHeight']) {
                    _0x90fex6 = document['body']['scrollWidth'];
                    _0x90fex8 = document['body']['scrollHeight'];
                } else {
                    _0x90fex6 = document['body']['offsetWidth'];
                    _0x90fex8 = document['body']['offsetHeight'];
                }
            };
            var _0x90fex7, _0x90fexa;
            if (self['innerHeight']) {
                if (document['documentElement']['clientWidth']) {
                    _0x90fex7 = document['documentElement']['clientWidth']
                } else {
                    _0x90fex7 = self['innerWidth']
                };
                _0x90fexa = self['innerHeight'];
            } else {
                if (document['documentElement'] && document['documentElement']['clientHeight']) {
                    _0x90fex7 = document['documentElement']['clientWidth'];
                    _0x90fexa = document['documentElement']['clientHeight'];
                } else {
                    if (document['body']) {
                        _0x90fex7 = document['body']['clientWidth'];
                        _0x90fexa = document['body']['clientHeight'];
                    }
                }
            };
            if (_0x90fex8 < _0x90fexa) {
                pageHeight = _0x90fexa
            } else {
                pageHeight = _0x90fex8
            };
            if (_0x90fex6 < _0x90fex7) {
                pageWidth = _0x90fex6
            } else {
                pageWidth = _0x90fex7
            };
            arrayPageSize = new Array(pageWidth, pageHeight, _0x90fex7, _0x90fexa);
            return arrayPageSize;
        }

        function _0x90fex1a() {
            var _0x90fex7, _0x90fex8;
            if (self['pageYOffset']) {
                _0x90fex8 = self['pageYOffset'];
                _0x90fex7 = self['pageXOffset'];
            } else {
                if (document['documentElement'] && document['documentElement']['scrollTop']) {
                    _0x90fex8 = document['documentElement']['scrollTop'];
                    _0x90fex7 = document['documentElement']['scrollLeft'];
                } else {
                    if (document['body']) {
                        _0x90fex8 = document['body']['scrollTop'];
                        _0x90fex7 = document['body']['scrollLeft'];
                    }
                }
            };
            arrayPageScroll = new Array(_0x90fex7, _0x90fex8);
            return arrayPageScroll;
        }

        function _0x90fex1b(_0x90fex6) {
            var _0x90fex7 = new Date();
            _0x90fex8 = null;
            do {
                var _0x90fex8 = new Date()
            } while (_0x90fex8 - _0x90fex7 < _0x90fex6);;
        }
        return this['unbind']('click')['click'](_0x90fex4);
    }
})(jQuery);
$(document)['ready'](function() {
    $('a[href$=jpg]:has(img)')['lightBox']();
    $('a[href$=jpeg]:has(img)')['lightBox']();
    $('a[href$=png]:has(img)')['lightBox']();
    $('a[href$=gif]:has(img)')['lightBox']();
    $('a[href$=bmp]:has(img)')['lightBox']();
});
