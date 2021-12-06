export const log=`
Jan  1 00:00:04 syslogd started: BusyBox v1.26.2
Jan  1 00:00:04 kernel: klogd started: BusyBox v1.26.2 (2019-03-28 15:50:49 MSK)
Jan  1 00:00:04 kernel: Probing RTL819X NIC-kenel stack size order[2]...
Jan  1 00:00:04 kernel: Start to initiate QM
Jan  1 00:00:04 kernel: INIT swCore descriptor count Failed : (0 [0])
Jan  1 00:00:04 kernel: eth0 added. vid=9 Member port 0x10f...
Jan  1 00:00:04 kernel: eth1 added. vid=8 Member port 0x10...
Jan  1 00:00:04 kernel: rtl819x_dlink Generic Netlink family is registered.
Jan  1 00:00:04 kernel: VFS: Mounted root (squashfs filesystem) readonly on device 31:4.
Jan  1 00:00:04 kernel: Freeing unused kernel memory: 216K (806ba000 - 806f0000)
Jan  1 00:00:04 kernel: updateboot: bootloader up to date
Jan  1 00:00:04 kernel: gpiom: module license 'Proprietary' taints kernel.
Jan  1 00:00:04 kernel: clock 40MHz
Jan  1 00:00:04 kernel: load efuse ok
Jan  1 00:00:04 kernel: rom_progress: 0x200006f
Jan  1 00:00:04 kernel: rom_progress: 0x400006f
Jan  1 00:00:04 kernel: [GetHwReg88XX][PHY_REG_PG_8197Fmp_Type0] size
Jan  1 00:00:04 kernel: [GetHwReg88XX][PHY_REG_PG_8197Fmp_Type0]
Jan  1 00:00:04 kernel: [GetHwReg88XX][rtl8197Ffw]
Jan  1 00:00:04 kernel: [GetHwReg88XX][rtl8197Ffw size]
Jan  1 00:00:04 kernel: [97F] Default BB Swing=30
Jan  1 00:00:04 kernel: rtl8192cd_init_hw_PCI----->
Jan  1 00:00:04 kernel: rtl8192cd_open----->
Jan  1 00:00:05 kernel: Wan link is up!
Jan  1 00:00:05 kernel: Wan link is down!
Jan  1 00:00:05 kernel: Add PERMIT ACL(br0) for CPU packets - OK
Jan  1 00:00:05 kernel: Add TOCPU ACL(eth1) for DHCP packets - OK
Jan  1 00:00:05 kernel: Add TOCPU ACL(br0) for DNS packets - OK
Jan  1 00:00:05 kernel: Add PERMIT ACL(br0) for CPU packets - OK
Jan  1 00:00:05 kernel: Add TOCPU ACL(eth1) for DHCP packets - OK
Jan  1 00:00:05 kernel: Add TOCPU ACL(br0) for DNS packets - OK
Jan  1 00:00:05 kernel: device eth0.2 entered promiscuous mode
Jan  1 00:00:05 kernel: device eth0 entered promiscuous mode
Jan  1 00:00:05 kernel: device wlan1 entered promiscuous mode
Jan  1 00:00:06 kernel: device wlan0 entered promiscuous mode
Jan  1 00:00:06 dnsmasq[969]: started, version 2.78 cache disabled
Jan  1 00:00:06 dnsmasq[969]: compile time options: IPv6 GNU-getopt no-DBus no-i18n no-IDN DHCP DHCPv6 no-Lua no-TFTP no-conntrack no-ipset no-auth no-DNSSEC no-loop-detect no-inotify
Jan  1 00:00:06 dnsmasq[969]: warning: interface br0 does not currently exist
Jan  1 00:00:06 dnsmasq-dhcp[969]: DHCP, IP range 192.168.1.2 -- 192.168.1.254, lease time 1d
Jan  1 00:00:06 dnsmasq-dhcp[969]: DHCPv6 stateless on fd01::
Jan  1 00:00:06 dnsmasq-dhcp[969]: router advertisement on fd01::
Jan  1 00:00:06 dnsmasq-dhcp[969]: IPv6 router advertisement enabled
Jan  1 00:00:06 dnsmasq[969]: read /tmp/hosts - 5 addresses
Jan  1 00:00:06 kernel: Wan link is up!
Jan  1 00:00:06 kernel: Wan link is down!
Jan  1 00:00:06 kernel: br0: port 3(wlan0) entered forwarding state
Jan  1 00:00:06 kernel: br0: port 3(wlan0) entered forwarding state
Jan  1 00:00:06 kernel: br0: port 2(wlan1) entered forwarding state
Jan  1 00:00:06 kernel: br0: port 2(wlan1) entered forwarding state
Jan  1 00:00:06 kernel: br0: port 1(eth0.2) entered forwarding state
Jan  1 00:00:06 kernel: br0: port 1(eth0.2) entered forwarding state
Jan  1 00:00:06 kernel: br0: port 3(wlan0) entered forwarding state
Jan  1 00:00:06 kernel: br0: port 2(wlan1) entered forwarding state
Jan  1 00:00:06 kernel: br0: port 1(eth0.2) entered forwarding state
Jan  1 00:00:06 kernel: IPv6: ADDRCONF(NETDEV_UP): eth1: link is not ready
Jan  1 00:00:06 anweb[1002]: Starting...
Aug  1 00:00:00 kernel: d-link channel[36+40+44+48] = 0
Aug  1 00:00:00 kernel: d-link channel[52+56+60+64] = 0
Aug  1 00:00:00 kernel: d-link channel[149+153+157+161] = 0
Aug  1 00:00:00 kernel: d-link select channel = 36 + 48
Aug  1 00:00:00 kernel: d-link channel[36] = 0
Aug  1 00:00:00 kernel: d-link channel[40] = 0
Aug  1 00:00:00 kernel: d-link channel[44] = 0
Aug  1 00:00:00 kernel: d-link channel[48] = 0
Aug  1 00:00:00 kernel: d-link select main channel = 36
Aug  1 00:00:00 kernel: d-link offset_2nd_chan = ABOVE
Aug  1 00:00:00 miniupnpd[1006]: could not open lease file: /tmp/upnp.leases
Aug  1 00:00:00 miniupnpd[1006]: HTTP listening on port 39229
Aug  1 00:00:00 miniupnpd[1006]: Listening for NAT-PMP traffic on port 5351
Aug  1 00:00:00 kernel: Wan link is up!
Aug  1 00:00:00 kernel: IPv6: ADDRCONF(NETDEV_CHANGE): eth1: link becomes ready
Aug  1 00:00:01 link_watcher_start[839]: link watcher start with status 1
Aug  1 00:00:01 kernel: monitor task is initialized pid= 1033 
Aug  1 00:00:01 anweb[1002]: anweb sighandler signal = 126
Aug  1 00:00:02 kernel: d-link channel[1+2+3+4+5] = 1890
Aug  1 00:00:02 anweb[1002]: HTTP main server started on 80,443s port (ports).
Aug  1 00:00:02 anweb[1002]: HTTP intercept server started on 81,4445s port (ports).
Aug  1 00:00:02 stop_process_t[1061]: not found pid process 'igmpx'
Aug  1 00:00:02 kernel: d-link channel[2+3+4+5+6] = 2330
Aug  1 00:00:02 kernel: d-link channel[3+4+5+6+7] = 2640
Aug  1 00:00:02 kernel: d-link channel[4+5+6+7+8] = 2810
Aug  1 00:00:02 kernel: d-link channel[5+6+7+8+9] = 2870
Aug  1 00:00:02 kernel: d-link channel[6+7+8+9+10] = 2770
Aug  1 00:00:02 kernel: d-link channel[7+8+9+10+11] = 2550
Aug  1 00:00:02 kernel: d-link channel[8+9+10+11+12] = 2230
Aug  1 00:00:02 kernel: d-link channel[9+10+11+12+13] = 1740
Aug  1 00:00:02 kernel: d-link select channel = 13 + 9
Aug  1 00:00:04 pppd[1091]: Plugin /usr/lib/pppd/rp-pppoe.so loaded.
Aug  1 00:00:04 pppd[1091]: RP-PPPoE plugin version 3.3 compiled against pppd 2.4.4
Aug  1 00:00:04 pppd[1092]: entering dlock, dfd = -1
Aug  1 00:00:04 pppd[1092]: dlock: locked
Aug  1 00:00:04 pppd[1092]: pppd 2.4.4 started by superadmin, uid 0
Aug  1 00:00:04 pppd[1092]: Sent PADT
Aug  1 00:00:04 pppd[1092]: PPP session is 40666
Aug  1 00:00:04 pppd[1092]: Using interface ppp0
Aug  1 00:00:04 pppd[1092]: Connect: ppp0 <--> eth1
Aug  1 00:00:04 pppd[1092]: CHAP authentication succeeded
Aug  1 00:00:04 pppd[1092]: CHAP authentication succeeded
Aug  1 00:00:04 pppd[1092]: peer from calling number A0:EC:F9:A6:2F:C3 authorized
Aug  1 00:00:04 pppd[1092]: local  IP address 100.125.26.251
Aug  1 00:00:04 pppd[1092]: remote IP address 88.80.38.1
Aug  1 00:00:04 pppd[1092]: primary   DNS address 213.87.74.21
Aug  1 00:00:04 pppd[1092]: secondary DNS address 213.87.74.5
Aug  1 00:00:05 dnsmasq[969]: read /tmp/hosts - 5 addresses
Aug  1 00:00:05 dnsmasq[969]: using nameserver 213.87.74.21#53
Aug  1 00:00:05 dnsmasq[969]: using nameserver 213.87.74.5#53
Aug  1 00:00:05 stop_process_t[1105]: not found pid process 'igmpx'
Aug  1 03:00:06 ppp_is_up[1105]: ppp0 speed: 100M Full
Aug  1 00:00:06 syslog[833]: libmtd (_mtd_write_ex): to "/dev/mtd2", size: 0x30, offset: 0x4000, buffer: 0x7ffe6b48
Nov  6 20:05:44 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  6 20:05:44 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  6 20:05:44 dnsmasq-dhcp[969]: DHCPREQUEST(br0) 192.168.1.145 70:85:c2:fb:75:4a 
Nov  6 20:05:44 dnsmasq-dhcp[969]: DHCPACK(br0) 192.168.1.145 70:85:c2:fb:75:4a DESKTOP-Q8DBI57
Nov  6 20:05:44 dnsmasq-dhcp[969]: DHCPREQUEST(br0) 192.168.1.145 70:85:c2:fb:75:4a 
Nov  6 20:05:44 dnsmasq-dhcp[969]: DHCPACK(br0) 192.168.1.145 70:85:c2:fb:75:4a DESKTOP-Q8DBI57
Nov  6 20:05:52 kernel: wlan0: A wireless client is associated - 00:F4:8D:B4:50:BB
Nov  6 20:05:52 kernel: wlan0: (skoray_pomosh) STA: 00:f4:8d:b4:50:bb Status: Successful[0]
Nov  6 20:05:52 kernel: wlan0: WPA2-AES PSK authentication in progress...
Nov  6 20:05:52 kernel: wlan0: A wireless client is associated - 00:F4:8D:B4:50:BB
Nov  6 20:05:52 kernel: wlan0: Open and authenticated
Nov  6 20:05:52 dnsmasq-dhcp[969]: DHCPREQUEST(br0) 192.168.1.182 00:f4:8d:b4:50:bb 
Nov  6 20:05:52 dnsmasq-dhcp[969]: DHCPACK(br0) 192.168.1.182 00:f4:8d:b4:50:bb DESKTOP-SI44Q4K
Nov  6 20:05:52 dnsmasq-dhcp[969]: DHCPSOLICIT(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 20:05:52 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 20:06:00 dnsmasq-dhcp[969]: DHCPINFORM(br0) 192.168.1.145 70:85:c2:fb:75:4a 
Nov  6 20:06:00 dnsmasq-dhcp[969]: DHCPACK(br0) 192.168.1.145 70:85:c2:fb:75:4a DESKTOP-Q8DBI57
Nov  6 20:15:52 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 20:25:52 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 20:35:52 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 20:45:52 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 20:55:52 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 21:05:52 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 21:15:52 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 21:25:52 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 21:35:52 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 21:45:52 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 21:55:52 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 22:05:52 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 22:05:53 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 22:05:55 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 22:05:59 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 22:06:07 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 22:06:23 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 22:06:55 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 22:17:59 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 22:27:59 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 22:37:59 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 22:47:59 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 22:57:59 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  6 23:02:40 kernel: wlan0: (skoray_pomosh) Deauth received from 00:f4:8d:b4:50:bb Reason: Leaving (or has left) IBSS or ESS[3]
Nov  6 23:02:40 kernel: wlan0: A wireless client is deauthenticated - 00:F4:8D:B4:50:BB
Nov  7 02:02:43 kernel: wlan0: A wireless client is associated - 00:F4:8D:B4:50:BB
Nov  7 02:02:43 kernel: wlan0: (skoray_pomosh) STA: 00:f4:8d:b4:50:bb Status: Successful[0]
Nov  7 02:02:43 kernel: wlan0: WPA2-AES PSK authentication in progress...
Nov  7 02:02:43 kernel: wlan0: A wireless client is associated - 00:F4:8D:B4:50:BB
Nov  7 02:02:43 kernel: wlan0: Open and authenticated
Nov  7 02:02:43 dnsmasq-dhcp[969]: DHCPREQUEST(br0) 192.168.1.182 00:f4:8d:b4:50:bb 
Nov  7 02:02:43 dnsmasq-dhcp[969]: DHCPACK(br0) 192.168.1.182 00:f4:8d:b4:50:bb DESKTOP-SI44Q4K
Nov  7 02:02:44 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 02:02:49 kernel: wlan0: (skoray_pomosh) Deauth received from 00:f4:8d:b4:50:bb Reason: Leaving (or has left) IBSS or ESS[3]
Nov  7 02:02:49 kernel: wlan0: A wireless client is deauthenticated - 00:F4:8D:B4:50:BB
Nov  7 09:40:33 kernel: wlan0: A wireless client is associated - BC:2D:EF:21:03:C1
Nov  7 09:40:33 kernel: wlan0: (skoray_pomosh) STA: bc:2d:ef:21:03:c1 Status: Successful[0]
Nov  7 09:40:33 kernel: wlan0: WPA2-AES PSK authentication in progress...
Nov  7 09:40:33 kernel: wlan0: A wireless client is associated - BC:2D:EF:21:03:C1
Nov  7 09:40:33 kernel: wlan0: Open and authenticated
Nov  7 09:40:38 dnsmasq-dhcp[969]: DHCPDISCOVER(br0) bc:2d:ef:21:03:c1 
Nov  7 09:40:38 dnsmasq-dhcp[969]: DHCPOFFER(br0) 192.168.1.15 bc:2d:ef:21:03:c1 
Nov  7 09:40:38 dnsmasq-dhcp[969]: DHCPDISCOVER(br0) bc:2d:ef:21:03:c1 
Nov  7 09:40:38 dnsmasq-dhcp[969]: DHCPOFFER(br0) 192.168.1.15 bc:2d:ef:21:03:c1 
Nov  7 09:40:38 dnsmasq-dhcp[969]: DHCPDISCOVER(br0) bc:2d:ef:21:03:c1 
Nov  7 09:40:38 dnsmasq-dhcp[969]: DHCPOFFER(br0) 192.168.1.15 bc:2d:ef:21:03:c1 
Nov  7 09:40:38 dnsmasq-dhcp[969]: DHCPREQUEST(br0) 192.168.1.15 bc:2d:ef:21:03:c1 
Nov  7 09:40:38 dnsmasq-dhcp[969]: DHCPACK(br0) 192.168.1.15 bc:2d:ef:21:03:c1 realme-6-Pro
Nov  7 10:40:48 dnsmasq-dhcp[969]: DHCPREQUEST(br0) 192.168.1.145 70:85:c2:fb:75:4a 
Nov  7 10:40:48 dnsmasq-dhcp[969]: DHCPACK(br0) 192.168.1.145 70:85:c2:fb:75:4a DESKTOP-Q8DBI57
Nov  7 10:40:48 dnsmasq-dhcp[969]: DHCPSOLICIT(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 10:40:48 dnsmasq-dhcp[969]: DHCPREQUEST(br0) 192.168.1.145 70:85:c2:fb:75:4a 
Nov  7 10:40:48 dnsmasq-dhcp[969]: DHCPACK(br0) 192.168.1.145 70:85:c2:fb:75:4a DESKTOP-Q8DBI57
Nov  7 10:40:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 10:49:24 miniupnpd[1006]: Failed to remove NAT-PMP mapping eport 19202, protocol TCP
Nov  7 10:49:24 miniupnpd[1006]: Failed to remove NAT-PMP mapping eport 19202, protocol UDP
Nov  7 10:50:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 11:00:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 11:01:57 kernel: wlan0: A wireless client is associated - 00:F4:8D:B4:50:BB
Nov  7 11:01:57 kernel: wlan0: (skoray_pomosh) STA: 00:f4:8d:b4:50:bb Status: Successful[0]
Nov  7 11:01:57 kernel: wlan0: WPA2-AES PSK authentication in progress...
Nov  7 11:01:57 kernel: wlan0: A wireless client is associated - 00:F4:8D:B4:50:BB
Nov  7 11:01:57 kernel: wlan0: Open and authenticated
Nov  7 11:01:57 dnsmasq-dhcp[969]: DHCPREQUEST(br0) 192.168.1.182 00:f4:8d:b4:50:bb 
Nov  7 11:01:57 dnsmasq-dhcp[969]: DHCPACK(br0) 192.168.1.182 00:f4:8d:b4:50:bb DESKTOP-SI44Q4K
Nov  7 11:01:57 dnsmasq-dhcp[969]: DHCPSOLICIT(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 11:01:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 11:10:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 11:11:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 11:20:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 11:21:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 11:30:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 11:31:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 11:40:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 11:41:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 11:50:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 11:51:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 12:00:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 12:01:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 12:10:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 12:11:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 12:15:56 kernel: wlan0: A wireless client is associated - A0:C9:A0:DD:C1:6C
Nov  7 12:15:56 kernel: wlan0: (skoray_pomosh) STA: a0:c9:a0:dd:c1:6c Status: Successful[0]
Nov  7 12:15:56 kernel: wlan0: WPA2-AES PSK authentication in progress...
Nov  7 12:15:56 kernel: wlan0: A wireless client is associated - A0:C9:A0:DD:C1:6C
Nov  7 12:15:57 kernel: wlan0: (skoray_pomosh) Deauth sent to a0:c9:a0:dd:c1:6c Reason: 4-Way Handshake timeout[15]
Nov  7 12:15:57 kernel: wlan0: A STA is rejected by 802.1x daemon - A0:C9:A0:DD:C1:6C
Nov  7 12:15:59 kernel: wlan0: A wireless client is associated - A0:C9:A0:DD:C1:6C
Nov  7 12:15:59 kernel: wlan0: (skoray_pomosh) STA: a0:c9:a0:dd:c1:6c Status: Successful[0]
Nov  7 12:15:59 kernel: wlan0: WPA2-AES PSK authentication in progress...
Nov  7 12:15:59 kernel: wlan0: A wireless client is associated - A0:C9:A0:DD:C1:6C
Nov  7 12:16:01 kernel: wlan0: Open and authenticated
Nov  7 12:16:03 dnsmasq-dhcp[969]: DHCPREQUEST(br0) 192.168.1.141 a0:c9:a0:dd:c1:6c 
Nov  7 12:16:03 dnsmasq-dhcp[969]: DHCPACK(br0) 192.168.1.141 a0:c9:a0:dd:c1:6c Galaxy-S8
Nov  7 12:20:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 12:21:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 12:30:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 12:31:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 12:40:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 12:41:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 12:50:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 12:51:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 13:00:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 13:01:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 13:10:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 13:11:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 13:20:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 13:21:58 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 13:30:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 13:31:59 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 13:39:29 kernel: wlan0: (skoray_pomosh) Deauth received from 00:f4:8d:b4:50:bb Reason: Leaving (or has left) IBSS or ESS[3]
Nov  7 13:39:29 kernel: wlan0: A wireless client is deauthenticated - 00:F4:8D:B4:50:BB
Nov  7 13:40:48 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 13:56:53 kernel: wlan1: A wireless client is associated - BC:2D:EF:21:03:C1
Nov  7 13:56:53 kernel: wlan1: (Sisik_and_Pisik) STA: bc:2d:ef:21:03:c1 Status: Successful[0]
Nov  7 13:56:53 kernel: wlan0: (skoray_pomosh) Disassoc sent to bc:2d:ef:21:03:c1 Reason: Unspecified reason[1]
Nov  7 13:56:53 kernel: wlan0: A STA is deleted by application program - BC:2D:EF:21:03:C1
Nov  7 13:56:53 kernel: wlan1: WPA2-AES PSK authentication in progress...
Nov  7 13:56:53 kernel: wlan1: A wireless client is associated - BC:2D:EF:21:03:C1
Nov  7 13:56:54 kernel: wlan1: Open and authenticated
Nov  7 13:56:54 dnsmasq-dhcp[969]: DHCPDISCOVER(br0) bc:2d:ef:21:03:c1 
Nov  7 13:56:54 dnsmasq-dhcp[969]: DHCPOFFER(br0) 192.168.1.15 bc:2d:ef:21:03:c1 
Nov  7 13:56:55 dnsmasq-dhcp[969]: DHCPDISCOVER(br0) bc:2d:ef:21:03:c1 
Nov  7 13:56:55 dnsmasq-dhcp[969]: DHCPOFFER(br0) 192.168.1.15 bc:2d:ef:21:03:c1 
Nov  7 13:56:55 dnsmasq-dhcp[969]: DHCPREQUEST(br0) 192.168.1.15 bc:2d:ef:21:03:c1 
Nov  7 13:56:55 dnsmasq-dhcp[969]: DHCPACK(br0) 192.168.1.15 bc:2d:ef:21:03:c1 realme-6-Pro
Nov  7 13:57:18 kernel: wlan1: (Sisik_and_Pisik) Deauth received from bc:2d:ef:21:03:c1 Reason: Due to inactivity[4]
Nov  7 13:57:18 kernel: wlan1: A wireless client is deauthenticated - BC:2D:EF:21:03:C1
Nov  7 13:59:15 kernel: wlan0: A STA is expired - A0:C9:A0:DD:C1:6C
Nov  7 13:59:15 kernel: wlan0: (skoray_pomosh) Deauth sent to a0:c9:a0:dd:c1:6c Reason: Leaving (or has left) IBSS or ESS[3]
Nov  7 17:12:34 dnsmasq-dhcp[969]: DHCPREQUEST(br0) 192.168.1.145 70:85:c2:fb:75:4a 
Nov  7 17:12:34 dnsmasq-dhcp[969]: DHCPACK(br0) 192.168.1.145 70:85:c2:fb:75:4a DESKTOP-Q8DBI57
Nov  7 17:12:34 dnsmasq-dhcp[969]: DHCPSOLICIT(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 17:12:34 dnsmasq-dhcp[969]: DHCPSOLICIT(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 17:12:35 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 17:13:12 miniupnpd[1006]: Failed to remove NAT-PMP mapping eport 19202, protocol TCP
Nov  7 17:13:12 miniupnpd[1006]: Failed to remove NAT-PMP mapping eport 19202, protocol UDP
Nov  7 17:15:30 kernel: wlan0: A wireless client is associated - 00:F4:8D:B4:50:BB
Nov  7 17:15:30 kernel: wlan0: (skoray_pomosh) STA: 00:f4:8d:b4:50:bb Status: Successful[0]
Nov  7 17:15:30 kernel: wlan0: WPA2-AES PSK authentication in progress...
Nov  7 17:15:30 kernel: wlan0: A wireless client is associated - 00:F4:8D:B4:50:BB
Nov  7 17:15:30 kernel: wlan0: Open and authenticated
Nov  7 17:15:30 dnsmasq-dhcp[969]: DHCPREQUEST(br0) 192.168.1.182 00:f4:8d:b4:50:bb 
Nov  7 17:15:30 dnsmasq-dhcp[969]: DHCPACK(br0) 192.168.1.182 00:f4:8d:b4:50:bb DESKTOP-SI44Q4K
Nov  7 17:15:30 dnsmasq-dhcp[969]: DHCPSOLICIT(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 17:15:31 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 17:22:34 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 17:25:31 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 17:32:37 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 17:35:31 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 17:42:37 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 17:45:31 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 17:52:37 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 17:55:31 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 18:02:37 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 18:03:18 kernel: wlan0: A wireless client is associated - A0:C9:A0:DD:C1:6C
Nov  7 18:03:18 kernel: wlan0: (skoray_pomosh) STA: a0:c9:a0:dd:c1:6c Status: Successful[0]
Nov  7 18:03:18 kernel: wlan0: WPA2-AES PSK authentication in progress...
Nov  7 18:03:18 kernel: wlan0: A wireless client is associated - A0:C9:A0:DD:C1:6C
Nov  7 18:03:18 kernel: wlan0: Open and authenticated
Nov  7 18:03:21 dnsmasq-dhcp[969]: DHCPDISCOVER(br0) a0:c9:a0:dd:c1:6c 
Nov  7 18:03:21 dnsmasq-dhcp[969]: DHCPOFFER(br0) 192.168.1.141 a0:c9:a0:dd:c1:6c 
Nov  7 18:03:21 dnsmasq-dhcp[969]: DHCPREQUEST(br0) 192.168.1.141 a0:c9:a0:dd:c1:6c 
Nov  7 18:03:21 dnsmasq-dhcp[969]: DHCPACK(br0) 192.168.1.141 a0:c9:a0:dd:c1:6c Galaxy-S8
Nov  7 18:05:31 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:27:e6:74:66:e8:6a:64:0c:7b:c2 
Nov  7 18:12:37 dnsmasq-dhcp[969]: DHCPINFORMATION-REQUEST(br0) 00:01:00:01:25:d1:c0:8b:70:85:c2:fb:75:4a 
Nov  7 18:12:49 conf_ipfilter[581]: create default conf
`;