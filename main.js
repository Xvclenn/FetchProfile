const info1 = document.getElementById("upper")

fetch("https://randomuser.me/api/")
    .then((res) => {
        if (res.ok) {
            return res.json()
        }
    })
    .then((results) => {
        const up = document.createElement('div');
        up.className = "up";
        const list1 =
            `<ul class ="ul1">
            <li><img src="${results.results[0].picture.large}" alt=""></li>
            <li class="name">${results.results[0].name.title + " " + results.results[0].name.first + " " + results.results[0].name.last}</li>
            <!-- <li class="gender">${results.results[0].gender}</li> -->
            <li class="email">${results.results[0].email}</li>
            <li class="tell">${results.results[0].phone}</li>     
        </ul>`
        
        up.innerHTML = up.innerHTML + list1



        const down = document.createElement('div')
        down.className = "down"
        const list2 = 
            `<ul class ="ul2">
            <li class="gender">Gender: ${results.results[0].gender}</li>
            <li class="city">City: ${results.results[0].location.city}</li>
            <li class="country">Country: ${results.results[0].location.country}</li>
            <li class="state">State: ${results.results[0].location.state}</li>
            <li class="cell">Cell: ${results.results[0].phone}</li>  
        </ul>`


        down.innerHTML = down.innerHTML + list2






        
        info1.append(up)
        info1.append(down)
    })