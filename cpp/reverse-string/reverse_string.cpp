#include "reverse_string.h"

namespace reverse_string {
    string reverse_string(string str) {
        string reversed = "";
        for (size_t i = 1; i < str.length() + 1; i++) {
            char letter = str[(str.length() - i)];
            reversed += letter;
        }
        return reversed;
    }
    
}
