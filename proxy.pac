function FindProxyForURL(url, host) {
    const domains = [
        'vipchanger.com',
        'google.com',
        '2ip.ru',
        'miro.com',
        'medium.com',
        'gitlab.com',
        'web.dev',
        'devserver6.com',
        'oxygenbuilder.com',
        'rutracker.net',
        'breakdance.com',
        'tinypng.com',
        'openai.com',
        'github.com',
        'flathub.org',
        'nvidia.com',
        'googleapis.com',
        'oaistatic.com',
        'tmetric.com',
        'patreon.com',
        'liqpay.ua',
        'oaiusercontent.com',
        'featuregates.org',
        'leonardo.ai',
        'canva.com',
        'gemini.google.com',
        'amazon.com',
        'microsoft.com',
        'azure.com'
    ]

    for (i = 0; i < domains.length; i++) {
        if (dnsDomainIs(host, domains[i]) || dnsDomainIs(host, '*.'+domains[i])) {
            return 'SOCKS 127.0.0.1:2080; PROXY 127.0.0.1:2081; DIRECT';
        }
    }

    return 'DIRECT';
}
