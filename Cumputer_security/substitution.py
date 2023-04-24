alphabet="abcdefghijklmnopqrstuvwxyz"
String_input = input("Enter plaintext: ") #bishal
key= int(input("Enter key: "))
n= len(String_input)
String_output= ""

for i in range(n):
    character = String_input[i]
    location =alphabet.find(character)
    new_location= (location+key)%26
    String_output = String_output + alphabet[new_location]

print(String_output)