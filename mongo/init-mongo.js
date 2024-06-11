db = db.getSiblingDB('carmind_back2');

db.createUser({
  user: "carmind_back_user",
  pwd: "carmind_back_password",
  roles: [
    {
      role: "readWrite",
      db: "carmind_back2"
    }
  ]
});