
function newJS_Dialogo(varDialogoTitulo, varDialogoTexto, varDialogoTipo, cb_OptEscolhido){

	var fyDialogStyle =
	'<!doctype html> \
	<style>  .btn {display: inline-block;padding: 6px 12px;margin-bottom: 0;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 1px solid transparent;border-radius: 4px;} \
			  .btn_vd {color:#fff;background-color:#5cb85c;background-image: -webkit-linear-gradient(top,#5cb85c 0,#419641 100%);background-image: -o-linear-gradient(top,#5cb85c 0,#419641 100%);background-image: -webkit-gradient(linear,left top,left bottom,from(#5cb85c),to(#419641));background-image: linear-gradient(to bottom,#5cb85c 0,#419641 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#ff5cb85c\', endColorstr=\'#ff419641\', GradientType=0);filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);background-repeat: repeat-x;border-color: #3e8f3e;text-shadow: 0 -1px 0 rgba(0,0,0,.2);-webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075);} \
			  .btn_vd:hover,.btn_vd:focus{background-color:#419641;background-position:0 -15px} \
			  .btn_vm {color:#fff;background-color:#d9534f;background-image: -webkit-linear-gradient(top,#d9534f 0,#c12e2a 100%);background-image: -o-linear-gradient(top,#d9534f 0,#c12e2a 100%);background-image: -webkit-gradient(linear,left top,left bottom,from(#d9534f),to(#c12e2a));background-image: linear-gradient(to bottom,#d9534f 0,#c12e2a 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#ffd9534f\', endColorstr=\'#ffc12e2a\', GradientType=0);filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);background-repeat: repeat-x;border-color: #b92c28;} \
			  .btn_vm:hover,.btn_vm:focus{background-color:#c12e2a;background-position:0 -15px} \
			  .btn_df {text-shadow: 0 1px 0 #fff;background-color:#e0e0e0;background-image: -webkit-linear-gradient(top,#fff 0,#e0e0e0 100%);background-image: -o-linear-gradient(top,#fff 0,#e0e0e0 100%);background-image: -webkit-gradient(linear,left top,left bottom,from(#fff),to(#e0e0e0));background-image: linear-gradient(to bottom,#fff 0,#e0e0e0 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#ffffffff\', endColorstr=\'#ffe0e0e0\', GradientType=0);filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);background-repeat: repeat-x;border-color: #dbdbdb;border-color: #ccc;} \
			  .btn_df:hover,.btn_df:focus{background-color:#e0e0e0;background-position:0 -15px} \
			  .btn_az{color:#fff;background-color:#5bc0de;background-image: -webkit-linear-gradient(top,#5bc0de 0,#2aabd2 100%);background-image: -o-linear-gradient(top,#5bc0de 0,#2aabd2 100%);background-image: -webkit-gradient(linear,left top,left bottom,from(#5bc0de),to(#2aabd2));background-image: linear-gradient(to bottom,#5bc0de 0,#2aabd2 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#ff5bc0de\', endColorstr=\'#ff2aabd2\', GradientType=0);filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);background-repeat: repeat-x;border-color: #28a4c9;} \
			  .btn_az:hover,.btn_az:focus{background-color:#2aabd2;background-position:0 -15px} \
	</style>';
	
	switch(varDialogoTipo){
		case 'confirm':
			var fyDialog = fyDialogStyle +
			'<section id="DialogConfirmJS" style="background-color:#FBFBFB;border:1px solid #BABABA;width:640px;min-height:146px;max-height:762px;z-index:999999;position:absolute;bottom:50%;font-family:arial;margin-left:50%;left:-321px;">\
				<div id="miniModalClose" \
					 style="float:right;font-size:18px;font-weight:bold;cursor:pointer;color:#8F8F8F;margin:4px;padding:0px 2px;" \
					 onmouseover="$(this).css(\'color\',\'#000\');" \
					 onmouseout="$(this).css(\'color\',\'#8F8F8F\');"> \
				&#10008; \
				</div> \
				<div id="title_content" style="margin-left:20px;margin-top:20px;">'+varDialogoTitulo+'</div> \
				<div id="text_content" style="margin-left:20px;margin-top:20px;font-size:14px;width:600px;max-height:600px;">'+varDialogoTexto+'</div> \
				<div id="buttons" style="height:40px;margin:20px;"> \
					<button id="opt_dialog_naoabcde" class="btn btn_vm" style="float:right;padding:8px 22px;font-weight:bold;">N&Atilde;O</button> \
					<button id="opt_dialog_simabcde" class="btn btn_vd" style="float:right;margin-right:12px;padding:8px 22px;font-weight:bold;">SIM</button> \
				</div> \
			</section> \
			';
			$(fyDialog).appendTo($('body'));
			
			var df_sinal0 = $.Deferred(), df_sinal1 = $.Deferred(), df_sinal2 = $.Deferred();
			$('#opt_dialog_naoabcde').bind('click', function() {
				df_sinal0.resolve();
			});
			$('#opt_dialog_simabcde').bind('click', function() {
				df_sinal1.resolve();
			});
			$('#miniModalClose').bind('click', function() {
				df_sinal2.resolve();
			});

			$.when(df_sinal0).then(function() {
				$('#DialogConfirmJS').remove();
				var retorno = 'nao';
				cb_OptEscolhido(retorno); //callback
			});
			$.when(df_sinal1).then(function() {
				$('#DialogConfirmJS').remove();
				var retorno = 'sim';
				cb_OptEscolhido(retorno);
			});
			$.when(df_sinal2).then(function() {
				$('#DialogConfirmJS').remove();
				var retorno = 'fechar';
				cb_OptEscolhido(retorno);
			});
		break;
		case 'input':
			var fyDialog = fyDialogStyle +
			'<section id="DialogInputJS" style="background-color:#FBFBFB;border:1px solid #BABABA;width:640px;min-height:146px;max-height:762px;z-index:999999;position:absolute;bottom:50%;font-family:arial;margin-left:50%;left:-321px;">\
				<div id="miniModalClose" \
					 style="float:right;font-size:18px;font-weight:bold;cursor:pointer;color:#8F8F8F;margin:4px;padding:0px 2px;" \
					 onmouseover="$(this).css(\'color\',\'#000\');" \
					 onmouseout="$(this).css(\'color\',\'#8F8F8F\');"> \
				&#10008; \
				</div> \
				<div id="title_content" style="margin-left:20px;margin-top:20px;">'+varDialogoTitulo+'</div> \
				<div id="text_content" style="margin-left:20px;margin-top:20px;font-size:14px;width:600px;max-height:600px;">'+varDialogoTexto+'</div> \
				<input type="text" id="inputDialogabcde" style="margin-left:20px;margin-top:20px;width:600px;padding:8px;" value="" />  \
				<div id="buttons" style="height:40px;margin:20px;"> \
					<button id="opt_dialog_cancelabcde" class="btn btn_df" style="float:right;padding:8px 22px;font-weight:bold;">Cancelar</button> \
					<button id="opt_dialog_okabcde" class="btn btn_az" style="float:right;margin-right:12px;padding:8px 22px;font-weight:bold;">OK</button> \
				</div> \
			</section> \
			';
			
			$(fyDialog).appendTo($('body'));
			
			var df_sinal0 = $.Deferred(), df_sinal1 = $.Deferred(), df_sinal2 = $.Deferred(), df_sinal3 = $.Deferred();;
			$('#opt_dialog_okabcde').bind('click', function() {
				df_sinal0.resolve();
			});
			$('#opt_dialog_cancelabcde').bind('click', function() {
				df_sinal1.resolve();
			});
			$('#miniModalClose').bind('click', function() {
				df_sinal2.resolve();
			});
			$.when(df_sinal0).then(function() {
				$.when($(fyDialog).appendTo($('body'))).then(function() {
					var retorno = $("#inputDialogabcde").val();
					$('#DialogInputJS').remove();
					cb_OptEscolhido(retorno); //callback
				});
			});
			$.when(df_sinal1).then(function() {
				$('#DialogInputJS').remove();
				var retorno = 'cancelar';
				cb_OptEscolhido(retorno);
			});
			$.when(df_sinal2).then(function() {
				$('#DialogInputJS').remove();
				var retorno = 'fechar';
				cb_OptEscolhido(retorno);
			});
		break;
		case 'message':
			var fyDialog = fyDialogStyle +
			'<section id="DialogInputJS" style="background-color:#FBFBFB;border:1px solid #BABABA;width:640px;min-height:146px;max-height:762px;z-index:999999;position:absolute;bottom:50%;font-family:arial;margin-left:50%;left:-321px;">\
				<div id="miniModalClose" \
					 style="float:right;font-size:18px;font-weight:bold;cursor:pointer;color:#8F8F8F;margin:4px;padding:0px 2px;" \
					 onmouseover="$(this).css(\'color\',\'#000\');" \
					 onmouseout="$(this).css(\'color\',\'#8F8F8F\');"> \
				&#10008; \
				</div> \
				<div id="title_content" style="margin-left:20px;margin-top:20px;">'+varDialogoTitulo+'</div> \
				<div id="text_content" style="margin-left:20px;margin-top:20px;font-size:14px;width:600px;max-height:600px;">'+varDialogoTexto+'</div> \
				<div id="buttons" style="height:40px;margin:20px;"> \
					<button id="opt_dialog_okabcde" class="btn btn_df" style="float:right;padding:8px 22px;font-weight:bold;">OK</button> \
				</div> \
			</section> \
			';
			
			$(fyDialog).appendTo($('body'));
			
			var df_sinal0 = $.Deferred(), df_sinal1 = $.Deferred(), df_sinal2 = $.Deferred();
			$('#opt_dialog_okabcde').bind('click', function() {
				df_sinal0.resolve();
			});
			$('#miniModalClose').bind('click', function() {
				df_sinal1.resolve();
			});
			$.when(df_sinal0).then(function() {
				$('#DialogInputJS').remove();
				var retorno = 'ok';
				cb_OptEscolhido(retorno);
			});
			$.when(df_sinal1).then(function() {
				$('#DialogInputJS').remove();
				var retorno = 'fechar';
				cb_OptEscolhido(retorno);
			});
		break;
	
	}
	
}