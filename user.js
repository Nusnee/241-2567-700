const BASE_URL = 'http://localhost:8080'

window.onload = async () => {
    await loadData()
}

const loadData = async () => {
    console.log('user page loaded')
    //1. load user ทั้งหมดจาก API ที่เราสร้างไว้
    const response = await axios.get(`${BASE_URL}/users`)
    console.log(response.data)

    const userDOM = document.getElementById('user')
    // 2. นำ user ทั้งหมด โหลดกลับเข้าไปใน html
    let htmlData = '<div>'
    for (let i = 0; i < response.data.length; i++) {
        let user = response.data[i]
        htmlData += `<div>
        ${user.ID} ${user.firstname} ${user.lastname} 
        <a href = 'index_1.html?id=${user.ID}'><button>Edit</button></a>
        <button class ='delete' data-id='${user.ID}'>Delete</button>
        </div>`
    }
    htmlData += '</div>'
    userDOM.innerHTML = htmlData

    // 3. ลบ user
    const deleteDOMs = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click', async (event) => {
            // ดึง id ของ user ที่ต้องการลบ
            const id = event.target.dataset.id
            try {
                await axios.delete(`${BASE_URL}/users/${id}`)
                loadData()  // recursive function เป็นการเรียก function ตัวเอง
            } catch (error) {
                console.log('error', error)
            }
        })
    }
}