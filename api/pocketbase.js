import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

class PocketBaseAuth {
  static instance;
  constructor() {}
  async fetchUsers() {
    const resultList = await pb
      .collection("users")
      .getList(1, 50, {
        filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));

    console.log("👉 res ", resultList);

    return resultList;
  }
  static async getInstance() {
    const authData = await fetch(
      "http://localhost:8090/api/admins/auth-with-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identity: "demo@demo.com",
          password: "demo@demo1",
        }),
      }
    );

    console.log("👉 login ", authData);

    if (!PocketBaseAuth.instance) {
      PocketBaseAuth.instance = new PocketBaseAuth();
    }
    return PocketBaseAuth.instance;
  }
}

export default PocketBaseAuth;
