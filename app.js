const packages = [
    { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs' },
    { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk' },
    { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147' },
    { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145' },
    { heavy: true, priority: true, fragile: true, to: 'Brittany' },
    { heavy: false, priority: true, fragile: false, to: 'Jonesy', trackingNumber: '8081baz' },
    { heavy: true, priority: false, fragile: true, to: 'Justin', trackingNumber: 'suz2367' }]

function packageAll() {
    let list = ''
    for (let i = 0; i < packages.length; i++) {
        const package = packages[i];
        list += `<li> 1st Class ${package.priority}: # ${package.trackingNumber}: TO ${package.to}: Fragile ${package.fragile}: Heavy ${package.heavy}</li>`
    }
    document.getElementById('list').innerHTML = list
}

function filter(shouldPriority) {
    let pPackages = packages.filter(package => package.priority == shouldPriority)
    let list = ''
    for (let i = 0; i < pPackages.length; i++) {
        const package = pPackages[i];
        list += `<li>${package.to}: ${package.trackingNumber}</li>`
    }
    document.getElementById('plist').innerHTML = list
}

function random() {
    let packages = Object.keys(package)
    let package = packages[Math.floor(Math.random() * package.length)]
}


function changeImg1() {
    let image = document.getElementById('openImg1');
    image.src = 'https://03b59fa1f82892810d5dabff9c1d752d.s3.us-west-1.amazonaws.com/images/1574189689_611XX5Ir43L.jpg'
}
function changeImg2() {
    let image = document.getElementById('openImg1');
    image.src = 'https://03b59fa1f82892810d5dabff9c1d752d.s3.us-west-1.amazonaws.com/images/1574189689_611XX5Ir43L.jpg'
}

function changeImg() {
    let image = document.getElementById('openImg');
    image.src = 'https://03b59fa1f82892810d5dabff9c1d752d.s3.us-west-1.amazonaws.com/images/1574189689_611XX5Ir43L.jpg'



    //     // image.addEventListener('click', function () {
    //         changeImage();
    //     });

    //     function changeImage() {
    //         image.src = 'https://03b59fa1f82892810d5dabff9c1d752d.s3.us-west-1.amazonaws.com/images/1574189689_611XX5Ir43L.jpg';
    //     }
    // }

    // ANCHOR
    // function changeImg() {
    //     let image = document.getElementById('openImg');
    //     if (image.src.match("https://www.bing.com/images/blob?bcid=T9Sf-RTf8I0DqxcxoNWLuD9SqbotqVTdP6U")) {
    //         image.src = "https://03b59fa1f82892810d5dabff9c1d752d.s3.us-west-1.amazonaws.com/images/1574189689_611XX5Ir43L.jpg";
    //     }
    //     else {
    //         image.src = "https://www.bing.com/images/blob?bcid=T9Sf-RTf8I0DqxcxoNWLuD9SqbotqVTdP6U"
    //     }
}
