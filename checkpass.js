String.prototype.hashCode = function() {
var hash = 0,
i, chr;
if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
return hash;
}

function Click(){
    var Code = document.getElementById("textbox").value;
    var rawText = Code.toString();
    
    console.log(rawText,rawText.hashCode())

    if(rawText.hashCode() == "-2108395305"){
        window.location = "https://view.genial.ly/63e3659dd1f4b6001891e7c2/presentation-presentacion-china";
    }
    else{
        alert("Incorrect Pass");
    }
}
