

// Selecting all user list items

const userItemss = document.querySelectorAll('.user-list li');

function handleUserItemClick() {
    const messagesDiv = document.createElement('div');
    messagesDiv.classList.add('messages');
    messagesDiv.id = "messages";
    messagesDiv.innerHTML = `
        <div class="received">
            <img src="/img/user1.png" alt="">
            <div class="user-msg">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, reiciendis?</p>
            </div>
        </div>
        <div class="received">
            <img src="/img/user1.png" alt="">
            <div class="user-msg">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, reiciendis?</p>
            </div>
        </div>
    `;

    const messageSection = document.querySelector('.message-section');
    messageSection.innerHTML = '';

    messageSection.appendChild(messagesDiv);
}

userItemss.forEach(item => {
    item.addEventListener('click', handleUserItemClick);
});





// ========================================================================================================

const userList = document.querySelectorAll('.user-list li');
const message = document.querySelector('.user h3');
const userImage = document.querySelector('.user img.user-image');

function handleClick() {
    userList.forEach(item => {
        item.classList.remove('active');
    });

    this.classList.add('active');
    const username = this.querySelector('h3').textContent;
    const userImgSrc = this.querySelector('img').src;

    message.textContent = username;
    userImage.src = userImgSrc;
}

userList.forEach(li => {
    li.addEventListener('click', handleClick);
});


//  =======================================================================================



// searching user

const searchInput = document.getElementById('searchInput');
const userItems = document.querySelectorAll('.user-list li');

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();

    userItems.forEach(item => {
        const username = item.querySelector('.username h3').textContent.toLowerCase();
        const matchesSearch = username.includes(searchTerm);

        if (matchesSearch) {
            item.style.display = 'flex'; // Show if it matches
        } else {
            item.style.display = 'none'; // Hide if it doesn't match
        }
    });
}

searchInput.addEventListener('input', handleSearch);


// seacrhing chat


document.getElementById('searchInput2').addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    const messages = document.querySelectorAll('.user-msg p');

    messages.forEach(message => {
        const text = message.textContent.toLowerCase();
        const messageDiv = message.parentNode.parentNode;

        if (text.includes(searchText)) {
            messageDiv.style.display = 'flex';
        } else {
            messageDiv.style.display = 'none';
        }
    });
});

// ===============================================================

document.getElementById('avatar').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const messagesContainer = document.getElementById('messages');

            const receivedMessage = document.createElement('div');
            receivedMessage.classList.add('sent');

            const imgElement = document.createElement('img');
            imgElement.src = '/img/user1.png'; // Replace this with the actual image URL

            const userMsgDiv = document.createElement('div');
            userMsgDiv.classList.add('user-msg');

            const fileLink = document.createElement('a');
            fileLink.href = event.target.result;
            fileLink.setAttribute('download', file.name);
            fileLink.innerText = `File: ${file.name}`;

            userMsgDiv.appendChild(fileLink);

            receivedMessage.appendChild(imgElement);
            receivedMessage.appendChild(userMsgDiv);

            messagesContainer.appendChild(receivedMessage);
        };

        reader.readAsDataURL(file);
    }
});




// ==================================================================

