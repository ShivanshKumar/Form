const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');
const submit = document.querySelector('#submit');
const pwd = document.querySelectorAll('#pa3 span input')[1];
const rpwd = document.querySelectorAll('#pa3 span input')[2];
const label = document.querySelector('#simg label');
const field = document.querySelectorAll('.field');
// console.log(label);


next.forEach((n,i)=>{
	n.addEventListener("click",()=>{
		// debugger;
		n.parentElement.parentElement.parentElement.children[i].classList.toggle('hide');
		n.parentElement.parentElement.parentElement.children[i+1].classList.toggle('hide');
	});
});

prev.forEach((n,i)=>{
	n.addEventListener("click",()=>{
		// debugger;
		n.parentElement.parentElement.parentElement.children[i].classList.toggle('hide');
		n.parentElement.parentElement.parentElement.children[i+1].classList.toggle('hide');
	});
});

submit.addEventListener('click',()=>{
	if(pwd.value!==rpwd.value){
		alert('Password and Confirm Password does not match!');
	}

	if(!filled()) {alert(`You didn't fill out something!`);};

});


const dragOver = (event)=>{
	console.log('do');
	event.preventDefault();
}

let file;

const dropHandler = (event)=>{
	console.log('drop');
	event.preventDefault();

      if (event.dataTransfer.items[0].kind === 'file') {
        file = event.dataTransfer.items[0].getAsFile();
        label.innerText = file.name;
        // debugger;
        label.parentElement.children[0].files[0] = file;
        // label.parentElement.children[0].dispatchEvent(input);
      }
}

label.parentElement.children[0].addEventListener('input',(event)=>{
		console.log(event)
        label.innerText = label.parentElement.children[0].files[0].name;
})


const filled = ()=>{
	let c=0;
	field.forEach((f)=>{
		if(f.value === '') {c++;};
	})
	if(c===0)
	return true;
	else return false;
}
