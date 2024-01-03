import React, { ReactElement, useState } from 'react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Login: React.FC = (): ReactElement => {
    const [date, setDate] = React.useState<Date>()
    const [showLogin, setShowLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const handleToggle = () => {
        setShowLogin(!showLogin); 
      };
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <Card className="w-[350px] marginbg wid30 unselectable">
        <ul className="ultitle">
        <li
            onClick={() => setShowLogin(true)}
            className={showLogin ? 'actives activeli' : 'activeli'}
        >
            로그인
        </li>
        <li
            onClick={() => setShowLogin(false)}
            className={!showLogin ? 'actives activeli' : 'activeli'}
        >
            회원가입
        </li>
        </ul>
          {showLogin ? (
          <div className='login margintop'>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">이메일</Label>
                  <Input id="name" placeholder="이메일을 입력해 주세요" />
                </div>
                <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">비밀번호</Label>
                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                id="loginPassword" 
                                placeholder="영문자, 숫자, 특수문자 포함 8~20자"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                {showPassword ? (
                                    <Eye
                                        className="h-4 w-4 opacity-50 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <EyeOff
                                        className="h-4 w-4 opacity-50 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button  className='width100'>로그인</Button>
          </CardFooter>
          </div>
          ) : (
          <div className='register margintop'>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" placeholder="이름을 입력해 주세요" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">성별</Label>
                  <Select>
                <SelectTrigger  className='width100 fontcolor'>
                    <SelectValue placeholder="성별을 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">여자</SelectItem>
                    <SelectItem value="dark">남자</SelectItem>
                </SelectContent>
                </Select>
                </div>
                <div className="flex flex-col space-y-1.5  width100">
                  <Label htmlFor="name">생년월일</Label>
                  <Popover>
                <PopoverTrigger asChild>
                    <Button
                    variant={"outline"}
                    className={cn(
                        "width100 justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                    >
                   
                    {date ? format(date, "PPP") : <span>생년월일을 선택하세요. </span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    />
                </PopoverContent>
                </Popover>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">이메일</Label>
                  <Input id="name" placeholder="이메일을 입력해 주세요" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">비밀번호</Label>
                  <div className="flex flex-col space-y-1.5">
                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                id="loginPassword" 
                                placeholder="영문자, 숫자, 특수문자 포함 8~20자"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                {showPassword ? (
                                    <Eye
                                        className="h-4 w-4 opacity-50 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <EyeOff
                                        className="h-4 w-4 opacity-50 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                )}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                id="loginPassword" 
                                placeholder="비밀번호를 확인해주세요"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                {showPassword ? (
                                    <Eye
                                        className="h-4 w-4 opacity-50 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <EyeOff
                                        className="h-4 w-4 opacity-50 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                )}
                            </span>
                        </div>
                    </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className='width100'>회원가입</Button>
          </CardFooter>
          </div>
          )}
          <style jsx global>
            {`
                .marginbg {
                margin: 100px auto;
                }
                .ultitle{
                    display: flex;
                    background-color: #f4f4f4;
                    width:100%;
                    text-align:center;
                }
                
                .width100{
                    width:100%;
                }
                .fontcolor{
                    color:#717179;
                }
                .margintop{
                    margin-top:20px;
                }
                .actives {
                    cursor: pointer;
                    background:#fff;
                   

                  }
                .activeli{
                    width:50%;
                    padding:10px;
                }
                Label{
                    margin-bottom:10px;
                }
                .wid30{
                    
                    width:30%;
                }
                * {
                    -webkit-user-select: none; /* Safari */
                    -moz-user-select: none; /* Firefox */
                    -ms-user-select: none; /* IE 10+ */
                    user-select: none; /* 표준 */
                }
                form{
                    padding:20px 0;
                }

            `}
            </style>
        </Card>
        
        )
      }

export default Login;
