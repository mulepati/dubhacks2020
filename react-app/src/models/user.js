// UserName
// UID
// Communities / expirience
// Groups
// 

class User extends React.Component {
    constructor(id) {
        super();
        try {
            let response = await fetch("http://localhost:4567/api/users?id=" + id);
            if (!response.ok) {
                alert(`Response to get user ${id} failed.`);
                return;
            }
            let parsed = await response.json();
            this.state ={
                uID: parsed[0],
                userName: parsed[1],
                communities: generateCommunities(parsed[2])
            };
        } catch (e) {
            alert(`Exception on user fetch request for user ${id}`);
            console.log(e);
        }
    }
}