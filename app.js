let array_a = [];
for (let i = 0; i < 2; i++) {
    array_a[i] = parseInt(prompt('Nhap vao mang a, gia tri phan tu ' + i));
}

let array_b = [];
for (let i = 0; i < 2; i++) {
    array_b[i] = parseInt(prompt('Nhap vao mang b, gia tri phan tu  ' + i));
}

let array_c=array_a+','+array_b;
alert(array_c);