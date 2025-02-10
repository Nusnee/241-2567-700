const express = require('express');
const bodyParset = require('body-parser');
const e = require('express');
const app = express();

const port = 8000;


app.use(bodyParset.json());

let users = [];
let counter = 1;

// path:GET  /users ใช้สำหรับแสดงข้อมูล user ทั้งหมด
app.get('/users', (req, res) => { 
    res.json(users);
});


// path:Post /user ใช้สำหรับสร้างข้อมูล user ใหม่
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter;
    counter+=1;
    users.push(user);
    res.json({
        message: 'Create new user successfully',
        user: user
    });

});

app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    // หา user จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);
      
    // แก้ไขข้อมูล user ที่หาเจอ
    if(updateUser.firstname){
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if(updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname;
    }
    res.json({
        message: 'Update user successfully',
        data:{
            user: updateUser,
            index: selectedIndex
        }
    })
    // user ที่ update ใหม่ update กลับไปเก็บใน  user เดิม


    res.send(id);
});
 

//path: Delete /user/:id ใช้สำหรับลบข้อมูล user โดยใช้ id ในการระบุ
app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    let selectedIndex = users.findIndex(user => user.id == id);

    //ลบ
    users.splice(selectedIndex, 1);
    res.json({
        message: 'Delete user successfully',
        index: selectedIndex
    });
});

app.listen(port,(req, res) => {
  console.log('Http Server is running on port' + port);
});



/* 
GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
POST /user สำหรับ create user ใหม่บันทึกเข้าไป
GET /user/:id สำหรับดึง user รายคนออกมาดู
PUT /user/:id สำหรับแก้ไขข้อมูล user รายคน (ตาม id)
DELETE /user/:id สำหรับลบ user รายคน (ตาม id)
*/