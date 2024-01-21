#include<iostream>
#include<string>
using namespace std;

string compressString(string s) {
    string compressed;
    int count = 1;

    for (int i = 0; i < s.length(); ++i) {
        if (i + 1 < s.length() && s[i] == s[i + 1]) {
            count++;
        } else {
            compressed += s[i] + to_string(count);
            count = 1;
        }
    }

    return compressed.length() < s.length() ? compressed : s;
}

int main() {
    string input = "aabcccccaaa";

    string result = compressString(input);

    cout << "Compressed String: " << result << endl;

    return 0;
}
