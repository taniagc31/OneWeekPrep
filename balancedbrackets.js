function isBalanced(s) {
    // Write your code here

    while (s.includes('()') || s.includes('[]') || s.includes('{}')) 
    {
        s= s.replace('()', '');
        s= s.replace('[]','');
        s= s.replace('{}','');
    }

    if (s.length !==0) return 'NO';
    else return 'YES';

}