default rel ; rip-relative addressing 

section .rodata             ; read only data
msg: db "Goodbye, Mars!", 0 ; db allocates memory & 0 is terminator

section .text               ; where stuff goes
global hello                ; symbol hello should be visible to the linker
hello:                      ; label
    lea rax, [msg]          ; rax is a 64 bit register & eax = 32 bit register
                            ; lea is load: destination rax, source is msg to load
    ret                     ; return ..go back to suspended caller

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
