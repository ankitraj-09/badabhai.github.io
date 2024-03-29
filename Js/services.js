// Html Elements //

const homeService = document.getElementById("homeService");
const vehicleService = document.getElementById("vehicleService");
const salonWomenService = document.getElementById("salonWomenService");
const salonMenService = document.getElementById("salonMenService");
const eduService = document.getElementById("eduService");

const headerSearch = document.querySelector("#headerSearch");
const searchBtn = document.querySelector("#searchBtn");
const serviceList = document.querySelector(".serviceList");
const navbarSection = document.querySelector(".navbarSection");

// Array of service objects //
const service = [
    {
        url: "../Assets/Image/img-shave.jpg",
        service: "Beard Grooming",
        charges: "₹ 700",
        categories: "Salon For Men",
        type: "fixed"
    },
    {
        url: "../Assets/Image/img-facial-men.jpg",
        service: "Face Care",
        charges: "₹ 700",
        categories: "Salon For Men",
        type: "fixed"
    },

    {
        url: "../Assets/Image/img-body-massage.jpg",
        service: "Massage Therapy",
        charges: "₹ 700",
        categories: "Salon For Men",
        type: "fixed"
    },

    {
        url: "../Assets/Image/img-groom-makeup.jpg",
        service: "Groom Makeup",
        charges: "₹ 700",
        categories: "Salon For Men",
        type: "fixed"
    },
    {
        url: "../Assets/Image/img-shave.jpg",
        service: "Haircut",
        charges: "₹ 700",
        categories: "Salon For Men",
        type: "fixed"
    },

    {
        url: "../Assets/Image/img-facial-men.jpg",
        service: "Face Care",
        charges: "₹ 700",
        categories: "Salon For Men",
        type: "fixed"
    },
    {
        url: "../Assets/Image/img-bride-makeup.jpg",
        service: "Bride Makeup",
        charges: "₹ 700",
        categories: "Salon For Women",
        type: "fixed"
    },

    {
        url: "../Assets/Image/img-haircut.jpg",
        service: "Haircut for Women",
        charges: "₹ 700",
        categories: "Salon For Women",
        type: "fixed"
    },

    {
        url: "../Assets/Image/img-mehndi.jpg",
        service: "Mehndi",
        charges: "₹ 700",
        categories: "Salon For Women",
        type: "fixed"
    },
    {
        url: "../Assets/Image/img-face-bleach.jpg",
        service: "Face Bleach",
        charges: "₹ 700",
        categories: "Salon For Women",
        type: "fixed"
    },

    {
        url: "../Assets/Image/img-hair-straightening.jpg",
        service: "Hair Straightening",
        charges: "₹ 700",
        categories: "Salon For Women",
        type: "fixed"
    },
    {
        url: "../Assets/Image/img-cleanup.jpg",
        service: "Manicure",
        charges: "₹ 700",
        categories: "Salon For Women",
        type: "fixed"
    },

    {
        url: "../Assets/Image/img-face-bleach.jpg",
        service: "Pedicure",
        charges: "₹ 700",
        categories: "Salon For Women",
        type: "fixed"
    },

    {
        url: "../Assets/Image/img-body-massage.jpg",
        service: "Massage For Women",
        charges: "₹ 700",
        categories: "Salon For Women",
        type: "fixed"
    },
    {
        url: "../Assets/Image/img-cleanup.jpg",
        service: "Thread & Face Wax",
        charges: "₹ 700",
        categories: "Salon For Women",
        type: "fixed"
    },
    {
        url: "../Assets/Image/img-home-clean.jpg",
        service: "House Cleaning",
        charges: "₹ 700",
        categories: "Home Services",
        type: "fixed"
    },

    {
        url: "../Assets/Image/img-gardener.jpg",
        service: "Gardening",
        charges: "negotiable",
        categories: "Home Services",
        type: "negotiable"
    },

    {
        url: "../Assets/Image/img-carpenter.jpg",
        service: "Carpentry",
        charges: "negotiable",
        categories: "Home Services",
        type: "negotiable"
    },

    {
        url: "../Assets/Image/img-electrician.jpg",
        service: "Electrician",
        charges: "negotiable",
        categories: "Home Services",
        type: "negotiable"
    },

    {
        url: "../Assets/Image/img-plumber.jpg",
        service: "Plumbing",
        charges: "negotiable",
        categories: "Home Services",
        type: "negotiable"
    },
    {
        url: "../Assets/Image/img-gardener.jpg",
        service: "Pest Controlling",
        charges: "negotiable",
        categories: "Home Services",
        type: "negotiable"
    },

    {
        url: "../Assets/Image/img-painter.jpg",
        service: "Painter",
        charges: "negotiable",
        categories: "Home Services",
        type: "negotiable"
    },

    {
        url: "../Assets/Image/img-wallpaper.jpg",
        service: "Wall Paper fixing",
        charges: "negotiable",
        categories: "Home Services",
        type: "negotiable"
    },


    {
        url: "../Assets/Image/img-tractor.jpg",
        service: "Tractor Services",
        charges: "negotiable",
        categories: "Home Services",
        type: "negotiable"
    },

    {
        url: "../Assets/Image/img-car-repair.jpg",
        service: "Car/Bike Repairing",
        charges: "negotiable",
        categories: "Vehicle Care",
        type: "negotiable"
    },

    {
        url: "../Assets/Image/img-car-washing.jpg",
        service: "Car Washing",
        charges: "negotiable",
        categories: "Vehicle Care",
        type: "negotiable"
    },

    {
        url: "../Assets/Image/img-car-dryclean.jpg",
        service: "Car Dry cleaning",
        charges: "negotiable",
        categories: "Vehicle Care",
        type: "negotiable"
    },

    {
        url: "../Assets/Image/img-tutor.jpg",
        service: "Home & Online Tutors",
        charges: "negotiable",
        categories: "Educational Support",
        type: "negotiable"
    },

    {
        url: "../Assets/Image/img-career.jpg",
        service: "Carer Counselling",
        charges: "negotiable",
        categories: "Educational Support",
        type: "negotiable"
    },

];

// To display all the services //
window.onload = () => {
    displayServices(homeService, "Home Services");
    displayServices(vehicleService, "Vehicle Care");
    displayServices(salonMenService, "Salon For Men");
    displayServices(salonWomenService, "Salon For Women");
    displayServices(eduService, "Educational Support");
}

// Search button functionality to show services //
searchBtn.addEventListener("click", showService);

function showService() {
    const text = headerSearch.value.toLowerCase();

    serviceList.textContent = "";

    if (text === "") {
        const list = document.createElement("li");
        list.textContent = "Please enter a service name";
        serviceList.appendChild(list);
    } else {

        for (let i = 0; i < service.length; i++) {

            if (service[i].service.toLowerCase().includes(text) || service[i].categories.toLowerCase().includes(text)) {
                const list = document.createElement("li");
                list.textContent = service[i].service;

                list.onclick = () => {
                    viewServices(service[i]);
                }

                serviceList.appendChild(list);
            }

        }
    }

}

// Function to display all the services //
function displayServices(section, serviceType) {

    for (let i = 0; i < service.length; i++) {
        if (service[i].categories == serviceType) {
            const box = document.createElement("div");
            const img = document.createElement("img");
            const text = document.createElement("p");

            box.setAttribute("class", "serviceCircle");
            box.onclick = () => {
                viewServices(service[i], box);
            }

            img.src = service[i].url;
            text.textContent = service[i].service;

            box.appendChild(img);
            box.appendChild(text);

            section.appendChild(box);
        }
    }
}

// View details of service in the form of modal box //
function viewServices(service) {
    navbarSection.style.zIndex = "0";

    const modal = document.querySelector(".modal");
    const modalBox = document.querySelector(".modalBox");
    const requestModal = document.querySelector(".requestModal");

    const img = document.getElementById("modalImg");
    const header = document.getElementById("modalH");
    const charges = document.getElementById("modalCha");
    const categories = document.getElementById("modalCat");
    const closeBtn = document.getElementById("closeBtn");
    const requestBtn = document.getElementById("requestBtn");

    img.src = service.url;
    header.textContent = service.service;
    charges.textContent = `Charges: ${service.charges}`;
    categories.textContent = `Categories: ${service.categories}`;
    closeBtn.textContent = "Close";
    requestBtn.textContent = "Request Services";

    modal.style.display = "block";
    modalBox.style.display = "block";
    requestModal.style.display = "none";


    closeBtn.onclick = () => {
        modal.style.display = "none";
        navbarSection.style.zIndex = "1";
        serviceList.textContent = "";
    }

    requestBtn.onclick = () => {
        requestService(service);
    }
}

// Request details of service in the form of modal box //
function requestService(service) {
    const modal = document.querySelector(".modal");
    const modalBox = document.querySelector(".modalBox");
    const requestModal = document.querySelector(".requestModal");

    const img = document.getElementById("rmodalImg");
    const header = document.getElementById("rmh");

    const formH = document.getElementById("formH");
    const formCha = document.getElementById("formCha");

    const charges = document.getElementById("rmcha");

    formH.style.display = "none";
    formCha.style.display = "none";

    const closeBtn = document.getElementById("rcloseBtn");

    img.src = service.url;
    header.textContent = service.service;

    formH.value = service.service;
    formCha.value = `Charges: ${service.charges}`;

    charges.textContent = `Charges: ${service.charges}`;
    closeBtn.textContent = "Close";

    closeBtn.onclick = () => {
        modal.style.display = "none";
        navbarSection.style.zIndex = "1";
        serviceList.textContent = "";
    }

    modalBox.style.display = "none";
    requestModal.style.display = "block";

}
