#include<iostream>
using namespace std;
int main()
{
    int num,rem,ans=0,mul=1;
    cout<<"enter the value of number: ";
    cin>>num;
    while(num>0)
    {
        rem=num%2;
        num=num/2;
        ans=rem*mul+ans;
        mul=mul*10;
    }
    cout<<ans; 
    return 0;
}