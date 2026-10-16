const subscriptions = [
    {
        id: "SUB_001",
        name: "Nguyen Van An",
        plan: "PERSONAL",
        deviceLimit: 2
    },
    {
        id: "SUB_002",
        name: "Tran Thi Binh",
        plan: "FAMILY",
        deviceLimit: 5
    },
    {
        id: "SUB_003",
        name: "Le Van Cuong",
        plan: "PERSONAL",
        deviceLimit: 2
    }
];

function addSubscription() {
    console.log("\n===== THEM THUE BAO MOI =====");

    const name = prompt("Nhap ten khach hang:");

    if (!name || name.trim() === "") {
        console.log("Ten khach hang khong duoc de trong.");
        return;
    }

    let plan = prompt("Chon goi (PERSONAL/FAMILY):");

    if (!plan) {
        console.log("Goi dich vu khong hop le.");
        return;
    }

    plan = plan.toUpperCase();

    if (plan !== "PERSONAL" && plan !== "FAMILY") {
        console.log("Chi duoc chon PERSONAL hoac FAMILY.");
        return;
    }

    const deviceLimit = plan === "PERSONAL" ? 2 : 5;
    const newId = "SUB_" + String(subscriptions.length + 1).padStart(3, "0");

    const newSubscription = {
        id: newId,
        name: name.trim(),
        plan: plan,
        deviceLimit: deviceLimit
    };

    subscriptions.push(newSubscription);

    console.log("Them thue bao thanh cong.");
    console.log("Ma thue bao:", newId);
}

function listSubscriptions() {
    console.log("\n================ DANH SACH THUE BAO ================");

    if (subscriptions.length === 0) {
        console.log("Chua co thue bao nao.");
        return;
    }

    console.table(subscriptions);
}

function updateSubscription() {
    console.log("\n===== CAP NHAT GOI THUE BAO =====");

    const id = prompt("Nhap ma thue bao can cap nhat:");

    if (!id) {
        console.log("Ma thue bao khong duoc de trong.");
        return;
    }

    const subscription = subscriptions.find(
        item => item.id === id.toUpperCase()
    );

    if (!subscription) {
        console.log("Khong tim thay thue bao co ma:", id);
        return;
    }

    let newPlan = prompt("Nhap goi moi (PERSONAL/FAMILY):");

    if (!newPlan) {
        console.log("Goi dich vu khong hop le.");
        return;
    }

    newPlan = newPlan.toUpperCase();

    if (newPlan !== "PERSONAL" && newPlan !== "FAMILY") {
        console.log("Chi duoc chon PERSONAL hoac FAMILY.");
        return;
    }

    subscription.plan = newPlan;
    subscription.deviceLimit = newPlan === "PERSONAL" ? 2 : 5;

    console.log("Cap nhat thue bao thanh cong.");
    console.log("Ma:", subscription.id);
    console.log("Goi moi:", subscription.plan);
    console.log("Han muc thiet bi:", subscription.deviceLimit);
}

function deleteSubscription() {
    console.log("\n===== HUY THUE BAO =====");

    const id = prompt("Nhap ma thue bao can huy:");

    if (!id) {
        console.log("Ma thue bao khong duoc de trong.");
        return;
    }

    const index = subscriptions.findIndex(
        item => item.id === id.toUpperCase()
    );

    if (index === -1) {
        console.log("Khong tim thay thue bao co ma:", id);
        return;
    }

    const deletedSubscription = subscriptions[index];

    subscriptions.splice(index, 1);

    console.log("Huy thue bao thanh cong.");
    console.log("Ma:", deletedSubscription.id);
    console.log("Ten:", deletedSubscription.name);
}

let menuChoice;

do {
    console.log(`
===== RIKKEISTREAM - QUAN LY THUE BAO =====
1. Them thue bao moi
2. Hien thi danh sach thue bao
3. Cap nhat goi thue bao
4. Huy thue bao
5. Thoat chuong trinh
`);

    menuChoice = Number(prompt("Nhap lua chon (1-5):"));

    switch (menuChoice) {
        case 1:
            addSubscription();
            break;

        case 2:
            listSubscriptions();
            break;

        case 3:
            updateSubscription();
            break;

        case 4:
            deleteSubscription();
            break;

        case 5:
            console.log("Da thoat chuong trinh.");
            break;

        default:
            console.log("Lua chon khong hop le. Vui long chon tu 1 den 5.");
    }
} while (menuChoice !== 5);