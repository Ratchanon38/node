const btn = document.getElementById('btn');
const liffId = '1655037660-XyjeOPBr';
let userId = '';

function main() {
    // 1.liff init
    // 2.get profile
    liff.init({ liffId: liffId });
    liff.ready.then(() => {
        if (!liff.isLoggedIn()) {
            liff.login();
        }
        liff.getProfile().then((profile) => {
            userId = profile.userId;
            console.log(profile);
        });
    });
}

main()

async function send(e) {
    e.preventDefault();
    const StudentID = document.getElementById('StudentID').value;
    const ThaiNationalid = document.getElementById('ThaiNationalid').value;
    const email = document.getElementById('email').value;
    // 3. axios post data
    try {
        const result = await axios.post('http://localhost:3001/api/v1/change-richmenu', {
            StudentID: StudentID,
            ThaiNationalid: ThaiNationalid,
            email: email,
            userId: userId
        });
        if (result.status == 200) {
            console.log("closeWindow");
            // liff.closeWindow();
        }
    } catch (error) {
        console.log(error);
    }
}