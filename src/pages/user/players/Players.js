import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPlayers} from "../../../services/playerService";

export default function Players() {
    const dispatch = useDispatch()
    const {players} = useSelector((state) => {
            return state.players
        }
    )
    useEffect(() => {
        dispatch(getPlayers())
    }, []);
    return (
        <div className={'row'}>
            <h1>List Players</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Champ</th>
                    <th scope="col">KDA</th>
                </tr>
                </thead>
                <tbody>
                {players.map((item, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.champ}</td>
                        <td>{item.kda}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
