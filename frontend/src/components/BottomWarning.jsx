import { Link, Links } from "react-router-dom"

export default function BottomWarning({warning, to}) {

    return <div className="flex justify-center items-center py-2">
        <p className="font-medium text-gray-500">{warning}</p>
        
    </div>
}