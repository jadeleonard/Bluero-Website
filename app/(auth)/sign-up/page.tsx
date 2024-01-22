import { Input } from '@/components/ui/input'
import {useForm} from 'react-hook-form'

type FormField = {
 name:string
 email:string
 password:string





}


export default function SignUp() {
    const {register} = useForm<FormField>();
    return(
        <div>
            <Input {...register("email",{
                required:true
            })}placeholder='Email'/>
            <Input {...register("password",{
                required:true
            })}/>
            <Input {...register("name",{
                required:true
            })}/>
        </div>
    )
    
}