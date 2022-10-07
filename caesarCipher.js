function caesarCipher(s, k) {
    // Write your code here
    k = k%26;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newMessage = "", index = 0;
    
    for (let i in s){
        alphabet = alphabet.toLowerCase();
        index = alphabet.toLowerCase().indexOf(s[i]);
    
        if (index == -1){
            alphabet = alphabet.toUpperCase();
            index = alphabet.indexOf(s[i]);
            if (index == -1){ 
                newMessage += s[i];
                continue;
            }
        }
       newMessage += alphabet[(index+k)%26];
    }
    return newMessage;;

}

    