```rust
fn main() -> std::io::Result<usize>{
    let args: Vec<String> = env::args().collect();
    // Attempts to create a starting socket
    let mut sfd: UdpWrapper = UdpWrapper::new();
    let server_info: Endpoint = Endpoint {
        ip: [0, 0, 0, 0],
        port: args[1].parse().unwrap(),
    };
    sfd.bind(&server_info);
    println!("Starting server on {:?}", server_info);
    let mut session: Vec<Connection> = Vec::new();
    'running: loop {
        let mut buffer: [u8; 1024] = [0; 1024];
        let bytes: usize = match sfd.recv_from(&mut buffer)?;
        handle_request(&buffer[..bytes], &mut session);
    }
}
```
