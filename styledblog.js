export function blog(){
    const addDialog = document.getElementById("entry");
    const addBut = document.getElementById("add");
    const editDialog = document.getElementById("editEntry");
    const addEntryBut = document.getElementById("OK");
    const postTitle = document.getElementById("title");
    const postDate = document.getElementById("date");
    const postSummary = document.getElementById("summary");
    const editTitle = document.getElementById("editTitle");
    const editDate = document.getElementById("editDate");
    const editSummary = document.getElementById("editSummary");
    const list = document.getElementById("list");
    const editButtons = document.getElementsByClassName('editButton');
    const deleteButtons = document.getElementsByClassName('deleteButton');
    const updateButtons = document.getElementsByClassName('updateButton');

    //Add button is clicked and dialog is opened
    addBut.addEventListener('click', () => {
        addDialog.showModal();
        document.getElementById("form").reset();
    });

    //Ok button is clicked and entry is saved
    addEntryBut.addEventListener('click', () => {
        let savedPosts = JSON.parse(window.localStorage.getItem('posts'));
        let newPost = {
            id: savedPosts.length,
            title: postTitle.value,
            date: postDate.value,
            summary: postSummary.value,
        }
        
        //add updated element to the local storage
        savedPosts.push(newPost);
        window.localStorage.setItem('posts', JSON.stringify(savedPosts));
        let entry = document.createElement("li");

        //create and set buttons
        let updateBut = document.createElement("button");
        let deleteBut = document.createElement("button");
        let editBut = document.createElement("button");
        editBut.setAttribute('class', 'editButton');
        deleteBut.setAttribute('class', 'deleteButton');
        updateBut.setAttribute('class', 'updateButton');
        updateBut.innerHTML = '<i class="fa fa-arrow-down"></i>';
        editBut.innerHTML = '<i class="fa fa-pencil"></i>';
        deleteBut.innerHTML = '<i class="fa fa-trash"></i>';

        //text entry
        let newText = document.createTextNode(newPost.title + ", " + newPost.date + ", " + newPost.summary + " ");

        //adding all items to list element
        entry.append(newText);
        entry.append(editBut);
        entry.append(deleteBut);
        entry.append(updateBut);

        //adding list element to list and closing the dialog
        list.append(entry);
        addDialog.close();

        //deleting list element
        Array.from(deleteButtons).forEach(button => button.addEventListener('click', () => {
            let listElem = button.parentElement;
            listElem.remove();
        }));

        //update blog entry
        Array.from(updateButtons).forEach(button => button.addEventListener('click', () => {            
            let savedPosts = JSON.parse(window.localStorage.getItem('posts'));
            let newPost = {
                id: savedPosts.length,
                title: editTitle.value,
                date: editDate.value,
                summary: editSummary.value,
            }
            let edit = newPost.title + ", " + newPost.date + ", " + newPost.summary + " ";
            let temp = button.parentElement;
            temp.textContent = edit;
            entry.append(editBut);
            entry.append(deleteBut);
            entry.append(updateBut);            
        }));

        //pull up edit screen
        Array.from(editButtons).forEach(button => button.addEventListener('click', () => {
            editDialog.showModal();
        }));


    });

}


