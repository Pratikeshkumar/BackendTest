const mysql1 = require('mysql2')

const con = mysql1.createConnection({
    host: 'database-1.cgx62yw9lamt.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '44OdoRdF3i4RamSizLow',
    database: 'dream_db'
})


// const sqlquary = 'DELETE FROM hometopbanner WHERE Specification_id BETWEEN 1 AND 3;'
// const sqlquary = 'DELETE FROM Orders WHERE order_id = avik-75392-738441'
// const sqlquary="SHOW COLUMNS FROM OrderItems";
// const sqlquary="show tables";
// const orderIdToDelete = 'AVIK-80294-153239';
// const sqlquary = `DELETE FROM Orders WHERE order_id = '${orderIdToDelete}'`;


// const sqlquary = ' table  created products'
// const sqlquary = 'alter table registration DROP COLUMN user_id'
const sqlquary = 'select * from user_privacy'
// const sqlquary = 'DROP TABLE Orders'
// const sqlquary = `
// ALTER TABLE products
// ADD categories_id INT,
// ADD subCategories_id INT,
// ADD FOREIGN KEY (categories_id) REFERENCES categories(categories_id),
// ADD FOREIGN KEY (subCategories_id) REFERENCES subCategories(subCategories_id);

// `;
// const sqlquary=`ALTER TABLE Orders
// ADD CustomerAddress JSON NOT NULL ;
// `
// const sqlquary='ALTER TABLE Orders MODIFY COLUMN order_id VARCHAR(255);'

// INSERT INTO \`items\` (\`item_name\`, \`subCetegories_name\`) VALUES
//   ('FACE MAKEUP', 'primer', 1, '2023-10-06 09:14:06', '2023-10-06 09:14:06'),
//   ('FACE MAKEUP', 'Concealer', 2, '2023-10-06 09:20:59', '2023-10-06 09:20:59'),
//   ('FACE MAKEUP', 'BB & CC Creams', 3, '2023-10-06 09:21:24', '2023-10-06 09:21:24'),
//   ('FACE MAKEUP', 'Foundation', 4, '2023-10-06 09:21:43', '2023-10-06 09:21:43'),
//   ('LIP MAKEUP', 'Lipstick', 5, '2023-10-18 10:56:55', '2023-10-18 10:56:55');
// `;





// const sqlquary=`DELETE FROM Videothumnails
// WHERE Videothumnail_id = 1`

// const sqlquary = "UPDATE cetegories SET categories_name = 'Hair care' WHERE categories_id = 3;";
// const sqlquary = `
// UPDATE products
// SET
//   product_categories='Face Wash'
// WHERE product_id = 32;

// `;


con.query(sqlquary, (err, result) => {
    if (err) throw err;
    console.log(result)
    // let result1 = JSON.parse(JSON.stringify(result))
    // const jsonDataString = JSON.stringify(result1, null, 2);
    // const filePath = 'result.json'; // Change this to the desired file path
    // fs.writeFile(filePath, jsonDataString, 'utf8', (err) => {
    //     if (err) throw err;
    //     console.log('Data written to file');
    // });

})