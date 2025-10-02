import {Text} from 'react-native'

export default function Titulo(props) {

    return (
        <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold', justifyContent: 'flex-start ', color:'red'}}>
            {props.texto}
        </Text>
    )

}