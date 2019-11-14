//Declare React.createElement biar gk perlu nulis React terus2an
const e = React.createElement

class LikeButton extends React.Component{
    constructor(props) {
        super(props)
        this.state = {liked:false} //Kondisi Awal
    }

    render() {
        //Kondisi Ketika True
        if (this.state.liked){
            return "You Like This"
        }


        return e (
            "button", 
            {
                //Pencet Double click = True
                onDoubleClick: () => this.setState({ liked: true}), 
                // Kalo cursor mouse nyentuh tombol terus pergi = True
                onMouseLeave: () => {
                    this.setState({
                        liked: true})
                }, 
                // Click sekali = True
                onClick: () => {
                    this.setState({ liked: true})
            }
        },
        "LIKE" // Tulisan di Button
        )
    }
}

const domContainer = document.getElementById("like_button_container")
ReactDOM.render(e(LikeButton), domContainer)