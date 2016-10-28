var clicker = document.getElementById('hi');

console.log(clicker.innerHTML);

clicker.addEventListener('click', function(){
	var text = this.innerHTML;
	if(text === 'Hey Rikke'){
		this.innerHTML = 'You are my lovely one';
	}
	else{
		this.innerHTML = 'Hey Rikke';s
	}
	
})