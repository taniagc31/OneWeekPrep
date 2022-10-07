function mergeLists(head1, head2) {
    function mergeLists(head1, head2) {
        const z = []
        while (head1) {
         z.push(head1.data)
            head1 = head1.next
        }
        while (head2) {
          z.push(head2.data)
            head2 = head2.next
        }
        return {
            data: z.sort((x, y) => x - y).join(' '),
            next: null
        }
    }
 
}