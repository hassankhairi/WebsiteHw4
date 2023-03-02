export function blog(){
    const addDialog = document.getElementById("entry");
    const addBut = document.getElementById("add");
    const editDialog = document.getElementById("editEntry");
    const addEntryBut = document.getElementById("OK");
    const postTitle = document.getElementById("title");
    const postDate = document.getElementById("date");
    const postSummary = document.getElementById("summary");
    const list = document.getElementById("list");
    const editButtons = document.getElementsByClassName('editButton');
    const deleteButtons = document.getElementsByClassName('deleteButton');

    //Add button is clicked and dialog is opened
    addBut.addEventListener('click', () => {
        addDialog.showModal();
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
        savedPosts.push(newPost);
        window.localStorage.setItem('posts', JSON.stringify(savedPosts));
        let entry = document.createElement("li");
        let editBut = document.createElement("button");
        let deleteBut = document.createElement("button");
        editBut.setAttribute('class', 'editButton');
        deleteBut.setAttribute('class', 'deleteButton');
        editBut.innerHTML = "Edit";
        deleteBut.innerHTML = "Delete";

        //text entry
        let newText = document.createTextNode(newPost.title + ", " + newPost.date + ", " + newPost.summary + " ");

        //adding all items to list element
        entry.append(newText);
        entry.append(editBut);
        entry.append(deleteBut);

        //adding list element to list and closing the dialog
        list.append(entry);
        addDialog.close();

        //deleting list element
        Array.from(deleteButtons).forEach(button => button.addEventListener('click', () => {
            let listElem = button.parentElement;
            listElem.remove();
        }));

        Array.from(editButtons).forEach(button => button.addEventListener('click', () => {
            editDialog.showModal();
        }));
    });

}


