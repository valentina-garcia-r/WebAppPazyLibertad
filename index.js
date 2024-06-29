const URL = "https://appuniversityfeli-4a8931549358.herokuapp.com/get_product_specification/";

fetch(URL)
    .then(res => res.json())
    .then(data => {
        displaySpecifications(data.result);
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });

function displaySpecifications(specifications) {
    const container = document.getElementById('product-specifications');

    Object.keys(specifications).forEach(category => {
        const categoryDiv = document.createElement('p');
        categoryDiv.classList.add('service-category');
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);

        const services = specifications[category];
        Object.keys(services).forEach(service => {
            const serviceItem = document.createElement('p');
            serviceItem.classList.add('service-item');
            serviceItem.textContent = `${service}: ${services[service]}`;
            categoryDiv.appendChild(serviceItem);
        });

        container.appendChild(categoryDiv);
    });
}


function validateEmail(){
                
	var emailField = document.getElementById('correo');
	
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	if( validEmail.test(emailField.value) ){
		return true;
	}else{
	alert('El correo no contiene el formato adecuado');
		return false;
	}
} 