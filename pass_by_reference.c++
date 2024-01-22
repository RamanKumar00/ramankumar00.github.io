#include<iostream>
using namespace std;
incr(int &n)
{
    n++;
}
int main()
{
    int a=4;
    incr(a);
    cout<<a;
}