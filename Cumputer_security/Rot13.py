alphabet1="abcdefghijklm"
alphabet2="nopqrstuvwxyz"
String_input = input("Enter plaintext: ") #bishal
key= int(input("Enter key: "))
n= len(String_input)
String_output= ""

for i in range(n):
    character = String_input[i]
    location = alphabet1.find(character)
    new_location= (location+key)%26
    old = alphabet1[new_location]
    print(old)
    new = alphabet2[new_location]
    print(new)
    if("a" <= old <= "m" ):
      String_output =  String_input.replace(old,new)
    else:
       String_output =  String_input.replace(new,old)
    print(String_output)
    


