// The __Node namespace will contain a reference to every class constructor from
// every Node.js built-in module. These class references can be used in param
// XML comment elements as the value of the type attribute in closures or
// continuation functions. e.g. <param name="connection" type="__Node.Socket"/>
// 
var __Node = {};

__Node.Constants = (function() {

	function _Constants() {
		/// <summary>Node.js constants.</summary>
		/// <field name="O_RDONLY" type="Number" integer="true">O_RDONLY (0)</field>
		/// <field name="O_WRONLY" type="Number" integer="true">O_WRONLY (1)</field>
		/// <field name="O_RDWR" type="Number" integer="true">O_RDWR (2)</field>
		/// <field name="S_IFMT" type="Number" integer="true">S_IFMT (61440)</field>
		/// <field name="S_IFREG" type="Number" integer="true">S_IFREG (32768)</field>
		/// <field name="S_IFDIR" type="Number" integer="true">S_IFDIR (16384)</field>
		/// <field name="S_IFCHR" type="Number" integer="true">S_IFCHR (8192)</field>
		/// <field name="O_CREAT" type="Number" integer="true">O_CREAT (256)</field>
		/// <field name="O_EXCL" type="Number" integer="true">O_EXCL (1024)</field>
		/// <field name="O_TRUNC" type="Number" integer="true">O_TRUNC (512)</field>
		/// <field name="O_APPEND" type="Number" integer="true">O_APPEND (8)</field>
		/// <field name="E2BIG" type="Number" integer="true">E2BIG (7)</field>
		/// <field name="EACCES" type="Number" integer="true">EACCES (13)</field>
		/// <field name="EADDRINUSE" type="Number" integer="true">EADDRINUSE (100)</field>
		/// <field name="EADDRNOTAVAIL" type="Number" integer="true">EADDRNOTAVAIL (101)</field>
		/// <field name="EAFNOSUPPORT" type="Number" integer="true">EAFNOSUPPORT (102)</field>
		/// <field name="EAGAIN" type="Number" integer="true">EAGAIN (11)</field>
		/// <field name="EALREADY" type="Number" integer="true">EALREADY (103)</field>
		/// <field name="EBADF" type="Number" integer="true">EBADF (9)</field>
		/// <field name="EBADMSG" type="Number" integer="true">EBADMSG (104)</field>
		/// <field name="EBUSY" type="Number" integer="true">EBUSY (16)</field>
		/// <field name="ECANCELED" type="Number" integer="true">ECANCELED (105)</field>
		/// <field name="ECHILD" type="Number" integer="true">ECHILD (10)</field>
		/// <field name="ECONNABORTED" type="Number" integer="true">ECONNABORTED (106)</field>
		/// <field name="ECONNREFUSED" type="Number" integer="true">ECONNREFUSED (107)</field>
		/// <field name="ECONNRESET" type="Number" integer="true">ECONNRESET (108)</field>
		/// <field name="EDEADLK" type="Number" integer="true">EDEADLK (36)</field>
		/// <field name="EDESTADDRREQ" type="Number" integer="true">EDESTADDRREQ (109)</field>
		/// <field name="EDOM" type="Number" integer="true">EDOM (33)</field>
		/// <field name="EEXIST" type="Number" integer="true">EEXIST (17)</field>
		/// <field name="EFAULT" type="Number" integer="true">EFAULT (14)</field>
		/// <field name="EFBIG" type="Number" integer="true">EFBIG (27)</field>
		/// <field name="EHOSTUNREACH" type="Number" integer="true">EHOSTUNREACH (110)</field>
		/// <field name="EIDRM" type="Number" integer="true">EIDRM (111)</field>
		/// <field name="EILSEQ" type="Number" integer="true">EILSEQ (42)</field>
		/// <field name="EINPROGRESS" type="Number" integer="true">EINPROGRESS (112)</field>
		/// <field name="EINTR" type="Number" integer="true">EINTR (4)</field>
		/// <field name="EINVAL" type="Number" integer="true">EINVAL (22)</field>
		/// <field name="EIO" type="Number" integer="true">EIO (5)</field>
		/// <field name="EISCONN" type="Number" integer="true">EISCONN (113)</field>
		/// <field name="EISDIR" type="Number" integer="true">EISDIR (21)</field>
		/// <field name="ELOOP" type="Number" integer="true">ELOOP (114)</field>
		/// <field name="EMFILE" type="Number" integer="true">EMFILE (24)</field>
		/// <field name="EMLINK" type="Number" integer="true">EMLINK (31)</field>
		/// <field name="EMSGSIZE" type="Number" integer="true">EMSGSIZE (115)</field>
		/// <field name="ENAMETOOLONG" type="Number" integer="true">ENAMETOOLONG (38)</field>
		/// <field name="ENETDOWN" type="Number" integer="true">ENETDOWN (116)</field>
		/// <field name="ENETRESET" type="Number" integer="true">ENETRESET (117)</field>
		/// <field name="ENETUNREACH" type="Number" integer="true">ENETUNREACH (118)</field>
		/// <field name="ENFILE" type="Number" integer="true">ENFILE (23)</field>
		/// <field name="ENOBUFS" type="Number" integer="true">ENOBUFS (119)</field>
		/// <field name="ENODATA" type="Number" integer="true">ENODATA (120)</field>
		/// <field name="ENODEV" type="Number" integer="true">ENODEV (19)</field>
		/// <field name="ENOENT" type="Number" integer="true">ENOENT (2)</field>
		/// <field name="ENOEXEC" type="Number" integer="true">ENOEXEC (8)</field>
		/// <field name="ENOLCK" type="Number" integer="true">ENOLCK (39)</field>
		/// <field name="ENOLINK" type="Number" integer="true">ENOLINK (121)</field>
		/// <field name="ENOMEM" type="Number" integer="true">ENOMEM (12)</field>
		/// <field name="ENOMSG" type="Number" integer="true">ENOMSG (122)</field>
		/// <field name="ENOPROTOOPT" type="Number" integer="true">ENOPROTOOPT (123)</field>
		/// <field name="ENOSPC" type="Number" integer="true">ENOSPC (28)</field>
		/// <field name="ENOSR" type="Number" integer="true">ENOSR (124)</field>
		/// <field name="ENOSTR" type="Number" integer="true">ENOSTR (125)</field>
		/// <field name="ENOSYS" type="Number" integer="true">ENOSYS (40)</field>
		/// <field name="ENOTCONN" type="Number" integer="true">ENOTCONN (126)</field>
		/// <field name="ENOTDIR" type="Number" integer="true">ENOTDIR (20)</field>
		/// <field name="ENOTEMPTY" type="Number" integer="true">ENOTEMPTY (41)</field>
		/// <field name="ENOTSOCK" type="Number" integer="true">ENOTSOCK (128)</field>
		/// <field name="ENOTSUP" type="Number" integer="true">ENOTSUP (129)</field>
		/// <field name="ENOTTY" type="Number" integer="true">ENOTTY (25)</field>
		/// <field name="ENXIO" type="Number" integer="true">ENXIO (6)</field>
		/// <field name="EOPNOTSUPP" type="Number" integer="true">EOPNOTSUPP (130)</field>
		/// <field name="EOVERFLOW" type="Number" integer="true">EOVERFLOW (132)</field>
		/// <field name="EPERM" type="Number" integer="true">EPERM (1)</field>
		/// <field name="EPIPE" type="Number" integer="true">EPIPE (32)</field>
		/// <field name="EPROTO" type="Number" integer="true">EPROTO (134)</field>
		/// <field name="EPROTONOSUPPORT" type="Number" integer="true">EPROTONOSUPPORT (135)</field>
		/// <field name="EPROTOTYPE" type="Number" integer="true">EPROTOTYPE (136)</field>
		/// <field name="ERANGE" type="Number" integer="true">ERANGE (34)</field>
		/// <field name="EROFS" type="Number" integer="true">EROFS (30)</field>
		/// <field name="ESPIPE" type="Number" integer="true">ESPIPE (29)</field>
		/// <field name="ESRCH" type="Number" integer="true">ESRCH (3)</field>
		/// <field name="ETIME" type="Number" integer="true">ETIME (137)</field>
		/// <field name="ETIMEDOUT" type="Number" integer="true">ETIMEDOUT (138)</field>
		/// <field name="ETXTBSY" type="Number" integer="true">ETXTBSY (139)</field>
		/// <field name="EWOULDBLOCK" type="Number" integer="true">EWOULDBLOCK (140)</field>
		/// <field name="EXDEV" type="Number" integer="true">EXDEV (18)</field>
		/// <field name="WSAEINTR" type="Number" integer="true">WSAEINTR (10004)</field>
		/// <field name="WSAEBADF" type="Number" integer="true">WSAEBADF (10009)</field>
		/// <field name="WSAEACCES" type="Number" integer="true">WSAEACCES (10013)</field>
		/// <field name="WSAEFAULT" type="Number" integer="true">WSAEFAULT (10014)</field>
		/// <field name="WSAEINVAL" type="Number" integer="true">WSAEINVAL (10022)</field>
		/// <field name="WSAEMFILE" type="Number" integer="true">WSAEMFILE (10024)</field>
		/// <field name="WSAEWOULDBLOCK" type="Number" integer="true">WSAEWOULDBLOCK (10035)</field>
		/// <field name="WSAEINPROGRESS" type="Number" integer="true">WSAEINPROGRESS (10036)</field>
		/// <field name="WSAEALREADY" type="Number" integer="true">WSAEALREADY (10037)</field>
		/// <field name="WSAENOTSOCK" type="Number" integer="true">WSAENOTSOCK (10038)</field>
		/// <field name="WSAEDESTADDRREQ" type="Number" integer="true">WSAEDESTADDRREQ (10039)</field>
		/// <field name="WSAEMSGSIZE" type="Number" integer="true">WSAEMSGSIZE (10040)</field>
		/// <field name="WSAEPROTOTYPE" type="Number" integer="true">WSAEPROTOTYPE (10041)</field>
		/// <field name="WSAENOPROTOOPT" type="Number" integer="true">WSAENOPROTOOPT (10042)</field>
		/// <field name="WSAEPROTONOSUPPORT" type="Number" integer="true">WSAEPROTONOSUPPORT (10043)</field>
		/// <field name="WSAESOCKTNOSUPPORT" type="Number" integer="true">WSAESOCKTNOSUPPORT (10044)</field>
		/// <field name="WSAEOPNOTSUPP" type="Number" integer="true">WSAEOPNOTSUPP (10045)</field>
		/// <field name="WSAEPFNOSUPPORT" type="Number" integer="true">WSAEPFNOSUPPORT (10046)</field>
		/// <field name="WSAEAFNOSUPPORT" type="Number" integer="true">WSAEAFNOSUPPORT (10047)</field>
		/// <field name="WSAEADDRINUSE" type="Number" integer="true">WSAEADDRINUSE (10048)</field>
		/// <field name="WSAEADDRNOTAVAIL" type="Number" integer="true">WSAEADDRNOTAVAIL (10049)</field>
		/// <field name="WSAENETDOWN" type="Number" integer="true">WSAENETDOWN (10050)</field>
		/// <field name="WSAENETUNREACH" type="Number" integer="true">WSAENETUNREACH (10051)</field>
		/// <field name="WSAENETRESET" type="Number" integer="true">WSAENETRESET (10052)</field>
		/// <field name="WSAECONNABORTED" type="Number" integer="true">WSAECONNABORTED (10053)</field>
		/// <field name="WSAECONNRESET" type="Number" integer="true">WSAECONNRESET (10054)</field>
		/// <field name="WSAENOBUFS" type="Number" integer="true">WSAENOBUFS (10055)</field>
		/// <field name="WSAEISCONN" type="Number" integer="true">WSAEISCONN (10056)</field>
		/// <field name="WSAENOTCONN" type="Number" integer="true">WSAENOTCONN (10057)</field>
		/// <field name="WSAESHUTDOWN" type="Number" integer="true">WSAESHUTDOWN (10058)</field>
		/// <field name="WSAETOOMANYREFS" type="Number" integer="true">WSAETOOMANYREFS (10059)</field>
		/// <field name="WSAETIMEDOUT" type="Number" integer="true">WSAETIMEDOUT (10060)</field>
		/// <field name="WSAECONNREFUSED" type="Number" integer="true">WSAECONNREFUSED (10061)</field>
		/// <field name="WSAELOOP" type="Number" integer="true">WSAELOOP (10062)</field>
		/// <field name="WSAENAMETOOLONG" type="Number" integer="true">WSAENAMETOOLONG (10063)</field>
		/// <field name="WSAEHOSTDOWN" type="Number" integer="true">WSAEHOSTDOWN (10064)</field>
		/// <field name="WSAEHOSTUNREACH" type="Number" integer="true">WSAEHOSTUNREACH (10065)</field>
		/// <field name="WSAENOTEMPTY" type="Number" integer="true">WSAENOTEMPTY (10066)</field>
		/// <field name="WSAEPROCLIM" type="Number" integer="true">WSAEPROCLIM (10067)</field>
		/// <field name="WSAEUSERS" type="Number" integer="true">WSAEUSERS (10068)</field>
		/// <field name="WSAEDQUOT" type="Number" integer="true">WSAEDQUOT (10069)</field>
		/// <field name="WSAESTALE" type="Number" integer="true">WSAESTALE (10070)</field>
		/// <field name="WSAEREMOTE" type="Number" integer="true">WSAEREMOTE (10071)</field>
		/// <field name="WSASYSNOTREADY" type="Number" integer="true">WSASYSNOTREADY (10091)</field>
		/// <field name="WSAVERNOTSUPPORTED" type="Number" integer="true">WSAVERNOTSUPPORTED (10092)</field>
		/// <field name="WSANOTINITIALISED" type="Number" integer="true">WSANOTINITIALISED (10093)</field>
		/// <field name="WSAEDISCON" type="Number" integer="true">WSAEDISCON (10101)</field>
		/// <field name="WSAENOMORE" type="Number" integer="true">WSAENOMORE (10102)</field>
		/// <field name="WSAECANCELLED" type="Number" integer="true">WSAECANCELLED (10103)</field>
		/// <field name="WSAEINVALIDPROCTABLE" type="Number" integer="true">WSAEINVALIDPROCTABLE (10104)</field>
		/// <field name="WSAEINVALIDPROVIDER" type="Number" integer="true">WSAEINVALIDPROVIDER (10105)</field>
		/// <field name="WSAEPROVIDERFAILEDINIT" type="Number" integer="true">WSAEPROVIDERFAILEDINIT (10106)</field>
		/// <field name="WSASYSCALLFAILURE" type="Number" integer="true">WSASYSCALLFAILURE (10107)</field>
		/// <field name="WSASERVICE_NOT_FOUND" type="Number" integer="true">WSASERVICE_NOT_FOUND (10108)</field>
		/// <field name="WSATYPE_NOT_FOUND" type="Number" integer="true">WSATYPE_NOT_FOUND (10109)</field>
		/// <field name="WSA_E_NO_MORE" type="Number" integer="true">WSA_E_NO_MORE (10110)</field>
		/// <field name="WSA_E_CANCELLED" type="Number" integer="true">WSA_E_CANCELLED (10111)</field>
		/// <field name="WSAEREFUSED" type="Number" integer="true">WSAEREFUSED (10112)</field>
		/// <field name="SIGINT" type="Number" integer="true">SIGINT (2)</field>
		/// <field name="SIGILL" type="Number" integer="true">SIGILL (4)</field>
		/// <field name="SIGABRT" type="Number" integer="true">SIGABRT (22)</field>
		/// <field name="SIGFPE" type="Number" integer="true">SIGFPE (8)</field>
		/// <field name="SIGKILL" type="Number" integer="true">SIGKILL (9)</field>
		/// <field name="SIGSEGV" type="Number" integer="true">SIGSEGV (11)</field>
		/// <field name="SIGTERM" type="Number" integer="true">SIGTERM (15)</field>
		/// <field name="SSL_OP_ALL" type="Number" integer="true">SSL_OP_ALL (4095)</field>
		/// <field name="SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION" type="Number" integer="true">SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION (262144)</field>
		/// <field name="SSL_OP_CIPHER_SERVER_PREFERENCE" type="Number" integer="true">SSL_OP_CIPHER_SERVER_PREFERENCE (4194304)</field>
		/// <field name="SSL_OP_CISCO_ANYCONNECT" type="Number" integer="true">SSL_OP_CISCO_ANYCONNECT (32768)</field>
		/// <field name="SSL_OP_COOKIE_EXCHANGE" type="Number" integer="true">SSL_OP_COOKIE_EXCHANGE (8192)</field>
		/// <field name="SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS" type="Number" integer="true">SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS (2048)</field>
		/// <field name="SSL_OP_EPHEMERAL_RSA" type="Number" integer="true">SSL_OP_EPHEMERAL_RSA (2097152)</field>
		/// <field name="SSL_OP_LEGACY_SERVER_CONNECT" type="Number" integer="true">SSL_OP_LEGACY_SERVER_CONNECT (4)</field>
		/// <field name="SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER" type="Number" integer="true">SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER (32)</field>
		/// <field name="SSL_OP_MICROSOFT_SESS_ID_BUG" type="Number" integer="true">SSL_OP_MICROSOFT_SESS_ID_BUG (1)</field>
		/// <field name="SSL_OP_MSIE_SSLV2_RSA_PADDING" type="Number" integer="true">SSL_OP_MSIE_SSLV2_RSA_PADDING (64)</field>
		/// <field name="SSL_OP_NETSCAPE_CA_DN_BUG" type="Number" integer="true">SSL_OP_NETSCAPE_CA_DN_BUG (536870912)</field>
		/// <field name="SSL_OP_NETSCAPE_CHALLENGE_BUG" type="Number" integer="true">SSL_OP_NETSCAPE_CHALLENGE_BUG (2)</field>
		/// <field name="SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG" type="Number" integer="true">SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG (1073741824)</field>
		/// <field name="SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG" type="Number" integer="true">SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG (8)</field>
		/// <field name="SSL_OP_NO_QUERY_MTU" type="Number" integer="true">SSL_OP_NO_QUERY_MTU (4096)</field>
		/// <field name="SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION" type="Number" integer="true">SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION (65536)</field>
		/// <field name="SSL_OP_NO_SSLv2" type="Number" integer="true">SSL_OP_NO_SSLv2 (16777216)</field>
		/// <field name="SSL_OP_NO_SSLv3" type="Number" integer="true">SSL_OP_NO_SSLv3 (33554432)</field>
		/// <field name="SSL_OP_NO_TICKET" type="Number" integer="true">SSL_OP_NO_TICKET (16384)</field>
		/// <field name="SSL_OP_NO_TLSv1" type="Number" integer="true">SSL_OP_NO_TLSv1 (67108864)</field>
		/// <field name="SSL_OP_PKCS1_CHECK_1" type="Number" integer="true">SSL_OP_PKCS1_CHECK_1 (134217728)</field>
		/// <field name="SSL_OP_PKCS1_CHECK_2" type="Number" integer="true">SSL_OP_PKCS1_CHECK_2 (268435456)</field>
		/// <field name="SSL_OP_SINGLE_DH_USE" type="Number" integer="true">SSL_OP_SINGLE_DH_USE (1048576)</field>
		/// <field name="SSL_OP_SINGLE_ECDH_USE" type="Number" integer="true">SSL_OP_SINGLE_ECDH_USE (524288)</field>
		/// <field name="SSL_OP_SSLEAY_080_CLIENT_DH_BUG" type="Number" integer="true">SSL_OP_SSLEAY_080_CLIENT_DH_BUG (128)</field>
		/// <field name="SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG" type="Number" integer="true">SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG (16)</field>
		/// <field name="SSL_OP_TLS_BLOCK_PADDING_BUG" type="Number" integer="true">SSL_OP_TLS_BLOCK_PADDING_BUG (512)</field>
		/// <field name="SSL_OP_TLS_D5_BUG" type="Number" integer="true">SSL_OP_TLS_D5_BUG (256)</field>
		/// <field name="SSL_OP_TLS_ROLLBACK_BUG" type="Number" integer="true">SSL_OP_TLS_ROLLBACK_BUG (8388608)</field>
		/// <field name="NPN_ENABLED" type="Number" integer="true">NPN_ENABLED (1)</field>
		this.O_RDONLY = 0;
		this.O_WRONLY = 1;
		this.O_RDWR = 2;
		this.S_IFMT = 61440;
		this.S_IFREG = 32768;
		this.S_IFDIR = 16384;
		this.S_IFCHR = 8192;
		this.O_CREAT = 256;
		this.O_EXCL = 1024;
		this.O_TRUNC = 512;
		this.O_APPEND = 8;
		this.E2BIG = 7;
		this.EACCES = 13;
		this.EADDRINUSE = 100;
		this.EADDRNOTAVAIL = 101;
		this.EAFNOSUPPORT = 102;
		this.EAGAIN = 11;
		this.EALREADY = 103;
		this.EBADF = 9;
		this.EBADMSG = 104;
		this.EBUSY = 16;
		this.ECANCELED = 105;
		this.ECHILD = 10;
		this.ECONNABORTED = 106;
		this.ECONNREFUSED = 107;
		this.ECONNRESET = 108;
		this.EDEADLK = 36;
		this.EDESTADDRREQ = 109;
		this.EDOM = 33;
		this.EEXIST = 17;
		this.EFAULT = 14;
		this.EFBIG = 27;
		this.EHOSTUNREACH = 110;
		this.EIDRM = 111;
		this.EILSEQ = 42;
		this.EINPROGRESS = 112;
		this.EINTR = 4;
		this.EINVAL = 22;
		this.EIO = 5;
		this.EISCONN = 113;
		this.EISDIR = 21;
		this.ELOOP = 114;
		this.EMFILE = 24;
		this.EMLINK = 31;
		this.EMSGSIZE = 115;
		this.ENAMETOOLONG = 38;
		this.ENETDOWN = 116;
		this.ENETRESET = 117;
		this.ENETUNREACH = 118;
		this.ENFILE = 23;
		this.ENOBUFS = 119;
		this.ENODATA = 120;
		this.ENODEV = 19;
		this.ENOENT = 2;
		this.ENOEXEC = 8;
		this.ENOLCK = 39;
		this.ENOLINK = 121;
		this.ENOMEM = 12;
		this.ENOMSG = 122;
		this.ENOPROTOOPT = 123;
		this.ENOSPC = 28;
		this.ENOSR = 124;
		this.ENOSTR = 125;
		this.ENOSYS = 40;
		this.ENOTCONN = 126;
		this.ENOTDIR = 20;
		this.ENOTEMPTY = 41;
		this.ENOTSOCK = 128;
		this.ENOTSUP = 129;
		this.ENOTTY = 25;
		this.ENXIO = 6;
		this.EOPNOTSUPP = 130;
		this.EOVERFLOW = 132;
		this.EPERM = 1;
		this.EPIPE = 32;
		this.EPROTO = 134;
		this.EPROTONOSUPPORT = 135;
		this.EPROTOTYPE = 136;
		this.ERANGE = 34;
		this.EROFS = 30;
		this.ESPIPE = 29;
		this.ESRCH = 3;
		this.ETIME = 137;
		this.ETIMEDOUT = 138;
		this.ETXTBSY = 139;
		this.EWOULDBLOCK = 140;
		this.EXDEV = 18;
		this.WSAEINTR = 10004;
		this.WSAEBADF = 10009;
		this.WSAEACCES = 10013;
		this.WSAEFAULT = 10014;
		this.WSAEINVAL = 10022;
		this.WSAEMFILE = 10024;
		this.WSAEWOULDBLOCK = 10035;
		this.WSAEINPROGRESS = 10036;
		this.WSAEALREADY = 10037;
		this.WSAENOTSOCK = 10038;
		this.WSAEDESTADDRREQ = 10039;
		this.WSAEMSGSIZE = 10040;
		this.WSAEPROTOTYPE = 10041;
		this.WSAENOPROTOOPT = 10042;
		this.WSAEPROTONOSUPPORT = 10043;
		this.WSAESOCKTNOSUPPORT = 10044;
		this.WSAEOPNOTSUPP = 10045;
		this.WSAEPFNOSUPPORT = 10046;
		this.WSAEAFNOSUPPORT = 10047;
		this.WSAEADDRINUSE = 10048;
		this.WSAEADDRNOTAVAIL = 10049;
		this.WSAENETDOWN = 10050;
		this.WSAENETUNREACH = 10051;
		this.WSAENETRESET = 10052;
		this.WSAECONNABORTED = 10053;
		this.WSAECONNRESET = 10054;
		this.WSAENOBUFS = 10055;
		this.WSAEISCONN = 10056;
		this.WSAENOTCONN = 10057;
		this.WSAESHUTDOWN = 10058;
		this.WSAETOOMANYREFS = 10059;
		this.WSAETIMEDOUT = 10060;
		this.WSAECONNREFUSED = 10061;
		this.WSAELOOP = 10062;
		this.WSAENAMETOOLONG = 10063;
		this.WSAEHOSTDOWN = 10064;
		this.WSAEHOSTUNREACH = 10065;
		this.WSAENOTEMPTY = 10066;
		this.WSAEPROCLIM = 10067;
		this.WSAEUSERS = 10068;
		this.WSAEDQUOT = 10069;
		this.WSAESTALE = 10070;
		this.WSAEREMOTE = 10071;
		this.WSASYSNOTREADY = 10091;
		this.WSAVERNOTSUPPORTED = 10092;
		this.WSANOTINITIALISED = 10093;
		this.WSAEDISCON = 10101;
		this.WSAENOMORE = 10102;
		this.WSAECANCELLED = 10103;
		this.WSAEINVALIDPROCTABLE = 10104;
		this.WSAEINVALIDPROVIDER = 10105;
		this.WSAEPROVIDERFAILEDINIT = 10106;
		this.WSASYSCALLFAILURE = 10107;
		this.WSASERVICE_NOT_FOUND = 10108;
		this.WSATYPE_NOT_FOUND = 10109;
		this.WSA_E_NO_MORE = 10110;
		this.WSA_E_CANCELLED = 10111;
		this.WSAEREFUSED = 10112;
		this.SIGINT = 2;
		this.SIGILL = 4;
		this.SIGABRT = 22;
		this.SIGFPE = 8;
		this.SIGKILL = 9;
		this.SIGSEGV = 11;
		this.SIGTERM = 15;
		this.SSL_OP_ALL = 4095;
		this.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION = 262144;
		this.SSL_OP_CIPHER_SERVER_PREFERENCE = 4194304;
		this.SSL_OP_CISCO_ANYCONNECT = 32768;
		this.SSL_OP_COOKIE_EXCHANGE = 8192;
		this.SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS = 2048;
		this.SSL_OP_EPHEMERAL_RSA = 2097152;
		this.SSL_OP_LEGACY_SERVER_CONNECT = 4;
		this.SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER = 32;
		this.SSL_OP_MICROSOFT_SESS_ID_BUG = 1;
		this.SSL_OP_MSIE_SSLV2_RSA_PADDING = 64;
		this.SSL_OP_NETSCAPE_CA_DN_BUG = 536870912;
		this.SSL_OP_NETSCAPE_CHALLENGE_BUG = 2;
		this.SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG = 1073741824;
		this.SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG = 8;
		this.SSL_OP_NO_QUERY_MTU = 4096;
		this.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION = 65536;
		this.SSL_OP_NO_SSLv2 = 16777216;
		this.SSL_OP_NO_SSLv3 = 33554432;
		this.SSL_OP_NO_TICKET = 16384;
		this.SSL_OP_NO_TLSv1 = 67108864;
		this.SSL_OP_PKCS1_CHECK_1 = 134217728;
		this.SSL_OP_PKCS1_CHECK_2 = 268435456;
		this.SSL_OP_SINGLE_DH_USE = 1048576;
		this.SSL_OP_SINGLE_ECDH_USE = 524288;
		this.SSL_OP_SSLEAY_080_CLIENT_DH_BUG = 128;
		this.SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG = 16;
		this.SSL_OP_TLS_BLOCK_PADDING_BUG = 512;
		this.SSL_OP_TLS_D5_BUG = 256;
		this.SSL_OP_TLS_ROLLBACK_BUG = 8388608;
		this.NPN_ENABLED = 1;
	}
	return new _Constants();
})();
