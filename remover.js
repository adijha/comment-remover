window.onload = function(){

	function $(query) {

		return document.querySelector(query);
	}

	var textarea = $('#source');

	var code = textarea.value;

	code = code.replace(/\t+/g,'\n');

	textarea.value = code;

	var button = $('#btn');

	button.addEventListener('click',clicked,false);
	button.addEventListener('touchstart',clicked,false);


	var editor = CodeMirror.fromTextArea(textarea,{ 
	    lineNumbers: true,
	    styleActiveLine: true,
	    matchBrackets: true
	});

	function clicked() {
	    var str = removeComments(editor.getValue());
	    editor.setValue(str);
	    
	}

	function removeComments(str) {
	    // http://stackoverflow.com/questions/5989315/regex-for-match-replacing-javascript-comments-both-multiline-and-inline
	    var newStr = str.replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:([\s;])+\/\/(?:.*)$)/gm, '$1');
	    return newStr;
	    
	}

};