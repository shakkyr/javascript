const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];

    // 1. Loop over the array with the forEach method and dynamically
    // create an ordered list of the first and last names from the objects.


let orderetList = document.createElement('ol');
document.body.appendChild(orderetList);

users.forEach(element => {
    let listItem = document.createElement('li');
    listItem.innerHTML = element.firstName +' '+ element.lastName;
    orderetList.appendChild(listItem);

    // 3. Create a custom data attribute called “data-id” and attach the id
// value to each li.
    listItem.setAttribute('data-id' , element.id);
    
    
});


// 2. Remove the bullet points of the ordered list with javaScript.
orderetList.style.listStyle = 'none';





