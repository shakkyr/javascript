const orderList = document.createElement("ol");
document.body.append(orderList)
users.forEach(element => {
    const listItem = document.createElement("li");
    listItem.innerHTML = element.firstName + ' ' + element.lastName
    const attribute = document.createAttribute('data-id')
    attribute.value = element.id
    listItem.setAttributeNode(attribute)
    console.log(listItem);

    listItem.style.listStyle = "none"
    orderList.append(listItem)

});
