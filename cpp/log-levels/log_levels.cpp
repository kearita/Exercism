#include <string>
using namespace std;
namespace log_line {
    string message(string msg) {
        return msg.substr(msg.find(' ') + 1);
    }
    string log_level(string msg) {
        return msg.substr(msg.find('[') + 1, msg.find(']') - 1);
    }
    string reformat(string msg) {
        return message(msg) + " (" + log_level(msg) + ")";
    }
}
