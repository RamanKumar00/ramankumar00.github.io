#include<iostream>
using namespace std;
int main()
{
    int num,mul=1,rem,ans=0;
    cout<<"enter the value of num: ";
    cin>>num;

    while(num>0)
    {
        rem=num%10;
        num=num/10;
        ans=rem*mul+ans;
        mul=mul*2;
    }
    cout<<ans;
    return 0;
}