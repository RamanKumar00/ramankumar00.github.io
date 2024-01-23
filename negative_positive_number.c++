#include<iostream>
using namespace std;
int main()
{
    int n;
    cout<<"enter the value of n: ";
    cin>>n;
    if(n>=0)
    {
        cout<<"given number"<<n<<"is positive number.";
    }
    else{
        cout<<"given number"<<n<<"is negative.";
    }
    return 0;
}