const config = require("./dbConfig");
const sql = require("mssql/msnodesqlv8");

const getUser = async () => {
  try {
    let request = await sql.connect(config);
    const data = await request.query(`select * from users`);
    return data.recordsets[0];
  } catch (error) {
    console.log("err:", error);
  }
};

async function addUser(User) {
  try {
    let pool = await sql.connect(config);
    let insertUsers = await pool
      .request()
      .input("fName", sql.NVarChar, User.fName)
      .input("lName", sql.NVarChar, User.lName)
      .input("userName", sql.NVarChar, User.userName)
      .input("mail", sql.NVarChar, User.mail)
      .input("password", sql.NVarChar, User.password)
      .input("avatar", sql.NVarChar, User.avatar)
      .input("gender", sql.NVarChar, User.gender)
      .execute("addNewUser");
    return {insertUsers, userName:User.userName};
  } catch (err) {
    console.log(err);
    return err;
  }
}


module.exports = {
  getUser,
  addUser,
};
