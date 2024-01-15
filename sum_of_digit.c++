#include <iostream>
using namespace std;
int main()
{
    int num,ans=0,rem;
    cout<<"enter thhe value of num:";
    cin>>num;
    while(num>0)
    {
        rem=num%10;
        num=num/10;
        ans=rem+ans;
        
    }
    cout<<"sum of digit: "<<ans;
    return 0;
}